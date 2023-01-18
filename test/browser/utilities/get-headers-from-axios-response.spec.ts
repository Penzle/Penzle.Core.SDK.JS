import { getHeadersFromAxiosResponse, ResponseFactory } from '../../../lib';

describe('getHeadersFromAxiosResponse', () => {
	it('should extract headers correctly', () => {
		const axiosResponse = {
			headers: { 'Content-Type': 'application/json', 'custom-header': 'custom-value' },
			status: 200,
			data: { some: 'data' },
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
		const expectedHeaders = [
			{ header: 'Content-Type', value: 'application/json' },
			{ header: 'custom-header', value: 'custom-value' }
		];

		const headers = getHeadersFromAxiosResponse(axiosResponse);

		expect(headers).toEqual(expectedHeaders);
	});

	it('should handle undefined headers', () => {
		const axiosResponse = {
			headers: {},
			status: 200,
			statusText: 'OK',
			data: { some: 'data' },
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
		const headers = getHeadersFromAxiosResponse(axiosResponse);
		expect(headers).toEqual([]);
	});

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
