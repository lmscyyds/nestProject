// common/dto/api-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({ example: 0 })
  code: number;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty()
  data: T;

  @ApiProperty({ example: '2025-06-16T12:00:00.000Z' })
  timestamp?: string;

  @ApiProperty({ example: '/user/findAll' })
  path?: string;
}
