import { ResponseType } from 'axios';
import { Header } from './header';
import { HttpCancellationToken } from './http-request-cancellation-token';
import { RetryStrategySettings } from './retryStrategy';

export interface HttpSettings<TCancellationToken> {
	retryStrategy?: RetryStrategySettings;

	headers?: Header[];

	responseType?: ResponseType;

	cancellationToken?: HttpCancellationToken<TCancellationToken>;
}
