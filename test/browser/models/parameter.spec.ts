import { Parameter } from '../../../lib';

describe('Parameter', () => {
	it('should throw an error when name is not provided', () => {
		expect(() => new Parameter(undefined, 'value')).toThrowError('Name of the parameter is not defined.');
	});

	it('should return name when getParameter is called', () => {
		const param = new Parameter('name', 'value');
		expect(param.getParameter()).toBe('name');
	});

	it('should return value when getParameterValue is called', () => {
		const param = new Parameter('name', 'value');
		expect(param.getParameterValue()).toBe('value');
	});
});
