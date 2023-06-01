export interface NavElement {
	name: string;
	url: string;
	prefetch: boolean;
	icon?: string;
	notifications?: number;
	target?: '_blank' | '_self' | '_parent' | '_top';
}
