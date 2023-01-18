/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface BaseHttpMethod {
	url: string;
}

export interface HttpPost extends BaseHttpMethod {
	body: any;
}

export interface HttpPut extends BaseHttpMethod {
	body: any;
}

export interface HttpPatch extends BaseHttpMethod {
	body: any;
}

export interface HttpDelete extends BaseHttpMethod {}

export interface HttpGet extends BaseHttpMethod {}
