export interface HttpCancellationToken<TCancellationToken> {
	token: TCancellationToken;
	cancel: (cancelMessage?: string) => void;
}
