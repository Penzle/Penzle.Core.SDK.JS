import { Header } from './header';
import { RetryStrategy } from './retryStrategy';

export interface IResponse<T> {
	data: T;
	headers: Header[];
	rawResponse: any;
	status: number;
	retryStrategy: RetryStrategy;
}
