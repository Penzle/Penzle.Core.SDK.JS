/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RetryStrategySettings {
	/**
	 * The number of times to retry before failing
	 * default: 3
	 *
	 * @type {number}
	 */
	retries?: number;
	/**
	 * Defines if the timeout should be reset between retries
	 * default: false
	 *
	 * @type {boolean}
	 */
	shouldResetTimeout?: boolean;
	/**
	 * A callback to further control if a request should be retried. By default, it retries if the result did not have a response.
	 * default: error => !error.response
	 *
	 * @type {Function}
	 */
	retryCondition?: (error: any) => boolean | Promise<boolean>;
	/**
	 * A callback to further control the delay between retry requests. By default there is no delay.
	 *
	 * @type {Function}
	 */
	retryDelay?: (retryCount: number, error: any) => number;
	/**
	 * A callback to get notified when a retry occurs, the number of times it has occurre, and the error
	 *
	 * @type {Function}
	 */
	onRetry?: (retryCount: number, error: any, requestConfig: any) => void;
}
