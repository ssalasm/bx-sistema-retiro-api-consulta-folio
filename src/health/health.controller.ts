import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
  DiskHealthIndicator,
  HttpHealthIndicator,
} from '@nestjs/terminus';
// import { OpenApiStandard } from '../decorators/openapi-standard-method';

@ApiTags('Health')
@Controller('health')
class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly memoryHealthIndicator: MemoryHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  //@OpenApiStandard()
  @HealthCheck()
  check(): any {
    return this.health.check([
      // the process should not use more than 300MB memory
      async () =>
        await this.memoryHealthIndicator.checkHeap(
          'memory heap',
          200 * 1024 * 1024,
        ),
      // The process should not have more than 300MB RSS memory allocated
      async () =>
        await this.memoryHealthIndicator.checkRSS(
          'memory RSS',
          200 * 1024 * 1024,
        ),
      // the used disk storage should not exceed the 80% of the available space
      async () =>
        await this.diskHealthIndicator.checkStorage('disk health', {
          thresholdPercent: 0.8,
          path: '/',
        }),
    ]);
  }

  @Get('liveness')
  // @OpenApiStandard()
  @HttpCode(200)
  liveness() {
    return 'OK';
  }

  @Get('readiness')
  // @OpenApiStandard()
  @HealthCheck()
  ping() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}

export default HealthController;
