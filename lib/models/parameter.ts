import { QueryParameter } from './query-parameter';

export class Parameter implements QueryParameter {
	/**
	 * Parameter
	 * @constructor
	 * @param {string} name - Name of the parameter
	 * @param {string} value - Value of the parameter
	 */
	constructor(public name: string, public value: string) {
		if (!name) {
			throw Error(`Name of the parameter is not defined.`);
		}
	}

	getParameter(): string {
		return this.name;
	}

	getParameterValue(): string {
		return this.value;
	}
}
