/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from './header';
import { RetryStrategySettings } from './retryStrategy';

export interface Response<T> {
	data: T;
	headers: Header[];
	rawResponse: any;
	status: number;
	retryStrategy?: RetryStrategySettings;
}
