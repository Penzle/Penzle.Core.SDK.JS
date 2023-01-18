import { ResponseFactory, getHeadersFromAxiosResponse } from '../../../lib';

describe('ResponseFactory', () => {
	describe('create', () => {
		it('should create a response object with the correct properties', () => {
			const axiosResponse = {
				data: { some: 'data' },
				headers: { 'Content-Type': 'application/json' },
				status: 200,
				statusText: 'OK',
				config: {
					url: 'https://someurl.com',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						some: 'data'
					}
				}
			};
			const retryStrategySettings = { retries: 3, retryDelay: (retryCount: number) => retryCount * 1000 };

			const response = ResponseFactory.create(axiosResponse, retryStrategySettings);

			expect(response.data).toEqual(axiosResponse.data);
			expect(response.headers).toEqual(getHeadersFromAxiosResponse(axiosResponse));
			expect(response.status).toEqual(axiosResponse.status);
			expect(response.rawResponse).toEqual(axiosResponse);
			expect(response.retryStrategy).toEqual(retryStrategySettings);
		});
	});
});
