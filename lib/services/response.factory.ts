import { AxiosResponse } from 'axios';
import { getHeadersFromAxiosResponse } from '../utilities';
import { RetryStrategySettings, Response } from '../models';

export class ResponseFactory {
	static create<TResult>(axiosResponse: AxiosResponse, retry?: RetryStrategySettings): Response<TResult> {
		const response: Response<TResult> = {
			data: axiosResponse.data,
			rawResponse: axiosResponse,
			headers: getHeadersFromAxiosResponse(axiosResponse),
			status: axiosResponse.status,
			retryStrategy: retry
		};

		return response;
	}
}
