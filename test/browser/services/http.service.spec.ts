import axios from 'axios';
import { HttpService } from '../../../lib';

describe('get', () => {
	it('should send a GET request and return a response object', async () => {
		const method = { url: 'https://example.com' };
		const responseData = { data: 'example data' };

		const axiosConfig = {
			baseURL: method.url,
			headers: { 'Content-Type': 'application/json' }
		};

		const axiosInst = axios.create(axiosConfig);

		spyOn(axiosInst, 'get').and.returnValue(Promise.resolve({ data: responseData }));

		const response = await new HttpService({ axiosInstance: axiosInst }).get<typeof responseData>(method);

		expect(response.data).toEqual(responseData);
	});

	it('should send a POST request and return a response object', async () => {
		const method = { url: 'https://example.com', body: { some: 'data' } };
		const responseData = { data: 'example data' };

		const axiosConfig = {
			baseURL: method.url,
			headers: { 'Content-Type': 'application/json' }
		};
		const axiosInst = axios.create(axiosConfig);
		spyOn(axiosInst, 'post').and.returnValue(Promise.resolve({ data: responseData }));

		const response = await new HttpService({ axiosInstance: axiosInst }).post<typeof responseData>(method);
		expect(response.data).toEqual(responseData);
	});
});
