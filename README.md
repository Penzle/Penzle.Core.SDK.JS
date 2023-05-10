[![npm version](https://badge.fury.io/js/@penzle%2Fcore-sdk.svg)](https://badge.fury.io/js/@penzle%2Fcore-sdk)
[![Build](https://github.com/Penzle/Penzle.Core.SDK.JS/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/Penzle/Penzle.Core.SDK.JS/actions/workflows/test-and-release.yaml) 
[![Known Vulnerabilities](https://snyk.io/test/github/Penzle/Penzle.Core.SDK.JS/badge.svg)](https://snyk.io/test/github/Penzle/Penzle.Core.SDK.JS)
[![GitHub license](https://img.shields.io/github/license/Penzle/Penzle.Core.SDK.JS.svg)](https://github.com/Penzle/Penzle.Core.SDK.JS)
![Gzip browser bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/core-sdk@latest/dist/bundles/penzle-core.min.js?compression=gzip)
[![Discord](https://img.shields.io/discord/991274367197663242?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/2aK8pF6WK2)

# Penzle Core package

This package includes the core modules and utilities for the `penzle-delivery.js` and `penzle-management.js` SDKs. 

## Installation

To install the JavaScript Delivery SDK, you can either use `npm` or take advantage of global CDNs like `jsdelivr`.

### npm 

To install the SDK via `npm`, run this command:

```
npm i @penzle/core-sdk --save
```

### UMD Bundles

For UMD bundles, include the library using a `script` tag on your `HTML` page. The library will be accessible through the `penzleDelivery` global variable.

UMD bundles can be found in the `dist/bundles` folder.

-   `dist/bundles/penzle-core.js`
-   `dist/bundles/penzle-core.min.js`

#### CDN Options

Choose between two available CDN options for the Penzle JavaScript Delivery SDK: the standard UMD bundle and the minified UMD bundle.

##### Standard UMD Bundle (penzle-core.js)

![Gzip UMD bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/core-sdk@latest/dist/bundles/penzle-core.js?compression=gzip)

Use the following link to include the standard UMD bundle:

```
https://cdn.jsdelivr.net/npm/@penzle/core-sdk@latest/dist/bundles/penzle-core.js
```

##### Minified UMD Bundle (penzle-core.min.js)

![Gzip UMD Minified bundle](https://img.badgesize.io/https://cdn.jsdelivr.net/npm/@penzle/core-sdk@latest/dist/bundles/penzle-core.min.js?compression=gzip)

Use the following link to include the minified UMD bundle:

```
https://cdn.jsdelivr.net/npm/@penzle/core-sdk@latest/dist/bundles/penzle-core.min.js
```

## HttpService: Handling HTTP Requests and Responses with Retry Policy

The `HttpService` class is an implementation of the `ApiService` interface that provides functionality for making HTTP requests and processing responses. It uses the Axios library to make the requests and can be configured with custom settings.

### Methods

The `HttpService` class has methods for making HTTP requests, including `get`, `post`, `delete`, `patch`, and `put`. Each method accepts a corresponding `HttpMethod` object (e.g., `HttpGet`, `HttpPost`) and an optional `HttpSettings` object, which contains settings like headers, responseType, cancellationToken, and retryStrategy.

For each request, the `getRetryPolicy` method is used to determine the retry strategy based on the provided settings or the default retry strategy.

The `ResponseFactory.create` method is used to create a `Response` object from the Axios response and the retry strategy configuration.

#### createCancellationToken

This method creates a new `HttpCancellationToken` that can be used to cancel an ongoing HTTP request. It uses the Axios `CancelToken` and `Canceler` to manage cancellation.

#### getRetryPolicy

This method returns the retry policy based on the provided `RetryStrategySettings` or the default retry strategy. The default strategy has a maximum of 5 retries and uses an exponential delay between retries.

### Usage

To use the `HttpService`, create an instance and pass the desired settings (if any) to the constructor. Then, call the appropriate method (e.g., `get`, `post`, `delete`, `patch`, `put`) with the required `HttpMethod` object and optional `HttpSettings` object

## Debugging

Each response from this SDK is bundled with supplementary debug data. This data can be extremely useful for troubleshooting if you encounter any issues, or if you need to examine network-related properties such as response headers.

Consider the following code snippet as an example:

```typescript

// 'deliveryResponse.response' holds the raw response data, headers, status, etc.
const rawResponseData = httpService.get<TResult>(method: HttpGet, settings?: HttpSettings<CancelToken>);

// To access response headers specifically, use 'rawResponse.headers'.
const responseHeaders = rawResponseData.rawResponse.headers;
```

## Implementing Test HTTP Service

In certain cases, you might want to inject a testing service as an implementation of the `ApiService` interface. This is particularly useful when you're writing tests and want to mock HTTP responses. Our library provides a configurable  `TestHttpService ` for such purposes.

```typescript
import { TestHttpService } from '@penzle/core-sdk';

const client = new /*(Delivery/Management)*/Client() {
    // ...
    httpService: new TestHttpService({
        fakeResponseJson: json,
        throwError: false
    });
```

## Reach out to us

### Need Help Using This Library?

If you need any assistance regarding the use of this library, we have several resources available to support you:
-  **Questions**: Reach out to our [support](https://www.penzle.com/support)
- **Instant Messaging**: For more immediate, casual conversation, our
[![Discord Channel](https://img.shields.io/discord/991274367197663242?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/2aK8pF6WK2) is a great place to connect with both the team and other users.

### Encountered an Issue or Have a Suggestion

If you've come across a bug or have an idea for a new feature, we would love to hear from you!
You can also open an issue on the GitHub repository or submit a pull request with improvements to the code: [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/Penzle/Penzle.Core.SDK.JS/issues/new)

### Need to Share Sensitive Information or Have Additional Inquiries?

If you need to share private data or have any other questions that weren't addressed, please don't hesitate to
[reach out](https://www.penzle.com/support).

## Contribution

We welcome contributions to this library. If you are interested in contributing, please read the [CONTRIBUTING](./CONTRIBUTING.md) file for more information on how to get started. Your help is appreciated, and every contribution counts in making our project better.

## Code of Conduct

Our aim is to foster a community that is respectful, inclusive, welcoming, and free from any form of harassment. We want all participants to feel safe, regardless of their gender identity, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, experience level, age, religious beliefs, or any other aspect of identity.

[Read our full Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This SDK is released under the [MIT License](./LICENSE).
