import { CancelToken } from 'axios';
import {
	HttpPost,
	HttpDelete,
	HttpPatch,
	HttpPut,
	HttpGet,
	HttpSettings,
	Response,
	HttpCancellationToken
} from '../models';

export interface ApiService<TCancellationToken> {
	get<TResult>(method: HttpGet, settings?: HttpSettings<TCancellationToken>): Promise<Response<TResult>>;
	post<TResult>(method: HttpPost, settings?: HttpSettings<TCancellationToken>): Promise<Response<TResult>>;
	delete<TResult>(method: HttpDelete, settings?: HttpSettings<TCancellationToken>): Promise<Response<TResult>>;
	patch<TResult>(method: HttpPatch, settings?: HttpSettings<TCancellationToken>): Promise<Response<TResult>>;
	put<TResult>(method: HttpPut, settings?: HttpSettings<TCancellationToken>): Promise<Response<TResult>>;
	createCancellationToken(): HttpCancellationToken<CancelToken>;
}
