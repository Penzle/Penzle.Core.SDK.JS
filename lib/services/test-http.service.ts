/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CancelToken } from 'axios';
import { ApiService } from './api.interface';
import {
	HttpCancellationToken,
	HttpDelete,
	HttpGet,
	HttpPatch,
	HttpPost,
	HttpPut,
	HttpSettings,
	Response
} from '../models';

export class TestHttpService implements ApiService<undefined> {
	response?: Response<any> = undefined;

	error?: any = undefined;

	constructor(config: { response?: Response<any>; error?: any }) {
		Object.assign(this, config);
	}

	get<TResult>(method: HttpGet, settings?: HttpSettings<undefined>): Promise<Response<TResult>> {
		return this.resolveTestCall();
	}

	post<TResult>(method: HttpPost, settings?: HttpSettings<undefined>): Promise<Response<TResult>> {
		return this.resolveTestCall();
	}

	delete<TResult>(method: HttpDelete, settings?: HttpSettings<undefined>): Promise<Response<TResult>> {
		return this.resolveTestCall();
	}

	patch<TResult>(method: HttpPatch, settings?: HttpSettings<undefined>): Promise<Response<TResult>> {
		return this.resolveTestCall();
	}

	put<TResult>(method: HttpPut, settings?: HttpSettings<undefined>): Promise<Response<TResult>> {
		return this.resolveTestCall();
	}

	createCancellationToken(): HttpCancellationToken<CancelToken> {
		return {
			cancel: () => {},
			token: { promise: new Promise(() => {}), reason: undefined, throwIfRequested: () => {} }
		};
	}

	private resolveTestCall(): Promise<Response<any>> {
		const promise = new Promise<Response<any>>((resolve, reject) => {
			if (this.response) {
				resolve(this.response);
			}
			if (this.error) {
				reject(this.error);
			}

			throw Error(`Test data are not provided.`);
		});
		return promise;
	}
}
