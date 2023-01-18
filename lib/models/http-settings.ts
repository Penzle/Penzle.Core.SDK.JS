import { ResponseType } from 'axios';
import { Header } from './header';
import { RetryStrategySettings } from './retryStrategy';

export interface HttpCancellationToken<TCancellationToken> {
	token: TCancellationToken;
	cancel: (cancelMessage?: string) => void;
}

export interface HttpSettings<TCancellationToken> {
	retryStrategy?: RetryStrategySettings;

	headers?: Header[];

	responseType?: ResponseType;

	cancellationToken?: HttpCancellationToken<TCancellationToken>;
}
