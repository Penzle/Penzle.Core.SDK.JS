import { QueryParameter, UrlHelper } from '../../../lib';

describe('Add parameters to URL', () => {
	it('should add query parameters to a URL without existing parameters', () => {
		const url = 'https://example.com';
		const options: QueryParameter[] = [
			{
				getParameter: () => 'param1=value1'
			}
		];
		const expectedUrl = 'https://example.com?param1=value1';

		expect(UrlHelper.addParametersToUrl(url, options)).toEqual(expectedUrl);
	});

	it('should add query parameters to a URL with existing parameters', () => {
		const url = 'https://example.com?existing=param';
		const options: QueryParameter[] = [
			{
				getParameter: () => 'param1=value1'
			}
		];
		const expectedUrl = 'https://example.com?existing=param&param1=value1';

		expect(UrlHelper.addParametersToUrl(url, options)).toEqual(expectedUrl);
	});

	it('should return the original URL when options is empty', () => {
		const url = 'https://example.com';
		const options: QueryParameter[] = [];

		expect(UrlHelper.addParametersToUrl(url, options)).toEqual(url);
	});

	it('should return the original URL when options is undefined', () => {
		const url = 'https://example.com';

		expect(UrlHelper.addParametersToUrl(url)).toEqual(url);
	});
});
