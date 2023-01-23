/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, CancelToken, Canceler } from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';
import { HttpCancellationToken, HttpGet, HttpSettings, Response, RetryStrategySettings } from '../models';
import { getHeaders } from '../utilities/http.utilities.functions';
import { HttpPost, HttpDelete, HttpPatch, HttpPut } from '../models/http-methods';
import { ApiService } from './api.interface';
import { ResponseFactory } from './response.factory';

export class HttpService implements ApiService<CancelToken> {
	private readonly axiosInstance: AxiosInstance;

	readonly defaultRetryStrategy: IAxiosRetryConfig = {
		retries: 5,
		retryDelay: axiosRetry.exponentialDelay
	};

	constructor(settings?: { axiosRequestConfig?: AxiosRequestConfig; axiosInstance?: AxiosInstance }) {
		if (settings?.axiosInstance) {
			this.axiosInstance = settings.axiosInstance;
		} else {
			this.axiosInstance = axios.create(settings?.axiosRequestConfig);
		}
	}

	async get<TResult>(method: HttpGet, settings?: HttpSettings<CancelToken>): Promise<Response<TResult>> {
		const retryStrategyConfig = this.getRetryPolicy(settings?.retryStrategy);

		const axiosResponse = await this.axiosInstance.get<TResult>(method.url, {
			headers: getHeaders(settings?.headers ?? [], false),
			responseType: settings?.responseType,
			cancelToken: settings?.cancellationToken?.token,
			'axios-retry': retryStrategyConfig
		});

		return ResponseFactory.create<TResult>(axiosResponse, retryStrategyConfig);
	}

	async post<TResult>(method: HttpPost, settings?: HttpSettings<CancelToken>): Promise<Response<TResult>> {
		const retryStrategyConfig = this.getRetryPolicy(settings?.retryStrategy);

		const axiosResponse = await this.axiosInstance.post<TResult>(method.url, method.body, {
			headers: getHeaders(settings?.headers ?? [], false),
			responseType: settings?.responseType,
			cancelToken: settings?.cancellationToken?.token,
			maxContentLength: 'Infinity' as any,
			maxBodyLength: 'Infinity' as any,
			'axios-retry': retryStrategyConfig
		});

		return ResponseFactory.create<TResult>(axiosResponse, retryStrategyConfig);
	}

	async delete<TResult>(method: HttpDelete, settings?: HttpSettings<CancelToken>): Promise<Response<TResult>> {
		const retryStrategyConfig = this.getRetryPolicy(settings?.retryStrategy);

		const axiosResponse = await this.axiosInstance.delete<TResult>(method.url, {
			headers: getHeaders(settings?.headers ?? [], false),
			responseType: settings?.responseType,
			cancelToken: settings?.cancellationToken?.token,
			maxContentLength: 'Infinity' as any,
			maxBodyLength: 'Infinity' as any,
			'axios-retry': retryStrategyConfig
		});

		return ResponseFactory.create<TResult>(axiosResponse, retryStrategyConfig);
	}

	async patch<TResult>(method: HttpPatch, settings?: HttpSettings<CancelToken>): Promise<Response<TResult>> {
		const retryStrategyConfig = this.getRetryPolicy(settings?.retryStrategy);

		const axiosResponse = await this.axiosInstance.patch<TResult>(method.url, method.body, {
			headers: getHeaders(settings?.headers ?? [], false),
			responseType: settings?.responseType,
			cancelToken: settings?.cancellationToken?.token,
			maxContentLength: 'Infinity' as any,
			maxBodyLength: 'Infinity' as any,
			'axios-retry': retryStrategyConfig
		});

		return ResponseFactory.create<TResult>(axiosResponse, retryStrategyConfig);
	}

	async put<TResult>(method: HttpPut, settings?: HttpSettings<CancelToken>): Promise<Response<TResult>> {
		const retryStrategyConfig = this.getRetryPolicy(settings?.retryStrategy);

		const axiosResponse = await this.axiosInstance.patch<TResult>(method.url, method.body, {
			headers: getHeaders(settings?.headers ?? [], false),
			responseType: settings?.responseType,
			cancelToken: settings?.cancellationToken?.token,
			maxContentLength: 'Infinity' as any,
			maxBodyLength: 'Infinity' as any,
			'axios-retry': retryStrategyConfig
		});

		return ResponseFactory.create<TResult>(axiosResponse, retryStrategyConfig);
	}

	createCancellationToken(): HttpCancellationToken<CancelToken> {
		let canceler: Canceler;

		const axiosToken = new axios.CancelToken((c) => {
			// An executor function receives a cancel function as a parameter
			canceler = c;
		});

		return {
			cancel: (cancelMessage: any) => canceler(`Request cancelled: ${cancelMessage ?? 'User cancel'}`),
			token: axiosToken
		};
	}

	private getRetryPolicy(retryStrategy?: RetryStrategySettings): IAxiosRetryConfig {
		return retryStrategy ?? this.defaultRetryStrategy;
	}
}
