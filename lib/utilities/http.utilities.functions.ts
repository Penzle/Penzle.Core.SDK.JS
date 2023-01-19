import { AxiosResponse } from 'axios';
import { Header } from '../models';

export function getHeaders(headers: Header[], addContentTypeHeader: boolean): { [header: string]: string } {
	const headerJson: { [header: string]: string } = {};

	headers?.forEach((header) => {
		headerJson[header.header] = header.value;
	});

	if (addContentTypeHeader) {
		// A default header for content types should be added if it does not already exist
		const contentTypeHeader = headers?.find((m) => m.header.toLowerCase() === 'Content-Type'.toLowerCase());

		if (!contentTypeHeader) {
			headerJson['Content-Type'] = 'application/json';
		}
	}

	return headerJson;
}

export function getHeadersFromAxiosResponse(response: AxiosResponse): Header[] {
	if (!response?.headers || Object.keys(response.headers).length === 0) {
		return [];
	}
	const headers: Header[] = [];

	Object.keys(response?.headers).forEach((headerKey) => {
		headers.push({
			header: headerKey,
			value: response.headers[headerKey] ?? ''
		});
	});

	return headers;
}
