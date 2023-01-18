import { getHeaders, Header } from '../../../lib';

describe('Get Headers', () => {
	it('should convert an array of headers to a JSON object', () => {
		const headers = [
			{ header: 'header1', value: 'value1' },
			{ header: 'header2', value: 'value2' }
		];
		const addContentTypeHeader = false;
		const expectedHeaders = { header1: 'value1', header2: 'value2' };

		expect(getHeaders(headers, addContentTypeHeader)).toEqual(expectedHeaders);
	});

	it('should add a default content type header if it does not exist', () => {
		const headers = [
			{ header: 'header1', value: 'value1' },
			{ header: 'header2', value: 'value2' }
		];
		const addContentTypeHeader = true;
		const expectedHeaders = { header1: 'value1', header2: 'value2', 'Content-Type': 'application/json' };

		expect(getHeaders(headers, addContentTypeHeader)).toEqual(expectedHeaders);
	});

	it('should replace an existing content type header if one exists', () => {
		const headers = [
			{ header: 'Content-Type', value: 'custom' },
			{ header: 'header2', value: 'value2' }
		];
		const addContentTypeHeader = true;
		const expectedHeaders = { 'Content-Type': 'custom', header2: 'value2' };

		expect(getHeaders(headers, addContentTypeHeader)).toEqual(expectedHeaders);
	});

	it('should return an empty object when headers array is empty', () => {
		const headers: Header[] = [];
		const addContentTypeHeader = true;
		const expectedHeaders = { 'Content-Type': 'application/json' };

		expect(getHeaders(headers, addContentTypeHeader)).toEqual(expectedHeaders);
	});

	it('should return an empty object when headers is undefined', () => {
		const addContentTypeHeader = true;
		const expectedHeaders = { 'Content-Type': 'application/json' };

		expect(getHeaders(undefined, addContentTypeHeader)).toEqual(expectedHeaders);
	});
});
