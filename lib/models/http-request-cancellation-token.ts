export interface HttpRequestCancellationToken<TCancellationToken> {
	token?: TCancellationToken;
	cancel: (cancelMessage?: string) => void;
}
