import { QueryParameter } from '../models';

export class UrlHelper {
	/**
	 * Provides the query parameters for a given URL
	 * @param url The URL where options will be added
	 * @param parameters Parameters to be added to the query
	 */
	static addParametersToUrl(url: string, parameters?: QueryParameter[]): string {
		let newUrl = url;
		if (parameters) {
			parameters.forEach((parameter) => {
				if (newUrl.indexOf('?') > -1) {
					newUrl += '&';
				} else {
					newUrl += '?';
				}

				newUrl += parameter.getParameter();
			});
		}
		return newUrl;
	}
}

export const urlHelper = new UrlHelper();
