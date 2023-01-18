import { QueryParameter } from '../models';

export class UrlHelper {
	/**
	 * Provides the query parameters for a given URL
	 * @param url The URL where options will be added
	 * @param options Parameters to be added to the query
	 */
	static addParametersToUrl(url: string, options?: QueryParameter[]): string {
		let newUrl = url;
		if (options) {
			options.forEach((filter) => {
				if (url.indexOf('?') > -1) {
					newUrl += '&';
				} else {
					newUrl += '?';
				}

				newUrl += filter.getParameter();
			});
		}
		return newUrl;
	}
}

export const urlHelper = new UrlHelper();
