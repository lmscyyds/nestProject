// src/common/utils/utils.module.ts
import { Module } from '@nestjs/common';
import { HttpClientService } from './http-client.service';

@Module({
  providers: [HttpClientService],
  exports: [HttpClientService],
})
export class UtilsModule {}
