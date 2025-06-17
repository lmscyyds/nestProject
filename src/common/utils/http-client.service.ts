// src/common/utils/http-client.service.ts
import { Injectable, Logger } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpClientService {
  private readonly logger = new Logger(HttpClientService.name);

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'get', url, ...config });
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'post', url, data, ...config });
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'put', url, data, ...config });
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'delete', url, ...config });
  }

  private async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios(config);
      return response.data;
    } catch (error: any) {
      this.logger.error(
        `HTTP ${config.method?.toUpperCase()} 请求失败: ${config.url}`,
        error?.response?.data || error.message,
      );
      throw error;
    }
  }
}
