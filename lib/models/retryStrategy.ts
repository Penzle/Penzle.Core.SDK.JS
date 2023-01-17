export interface RetryStrategy {
	options: RetryStrategySettings;
	retryAttempts: number;
}

export interface RetryStrategySettings {
	/**
	 * back-off interval between retries
	 */
	deltaBackoffMs?: number;
	/**
	 * Maximum allowed number of attempts
	 */
	maxAttempts?: number;
	/**
	 * Indicates if jitter is added to retry
	 */
	addJitter?: boolean;
	/**
	 * Determines if error can be retried. There are errors that are never retried
	 * such as when request is cancelled or the response status is 404 and so on...
	 */
	canRetryError?: (error: any) => boolean;
}
