import axios, { AxiosInstance, AxiosRequestConfig, CancelToken } from 'axios';

export default class HttpService {
	private readonly axiosInstance: AxiosInstance;

	constructor(private opts?: { axiosRequestConfig?: AxiosRequestConfig; logErrorsToConsole?: boolean }) {
		this.axiosInstance = axios.create(opts?.axiosRequestConfig);
		// this.functionsConfig = this.getFunctionsConfig();
	}

	async get<T>(url: string): Promise<T> {
		const axiosResponse = await this.axiosInstance.get<T>(call.url, {
			headers: getHeadersJson(options?.headers ?? [], false),
			responseType: options?.responseType,
			cancelToken: options?.cancelToken?.token
		});
	}

	// async getAsync<TRawData>(
	// 	call: IHttpGetQueryCall,
	// 	options?: IHttpQueryOptions<CancelToken>
	// ): Promise<IResponse<TRawData>> {
	// 	return await HttpFunctions.getWithRetryAsync<TRawData>(this.axiosInstance, call, this.functionsConfig, options);
	// }
}
