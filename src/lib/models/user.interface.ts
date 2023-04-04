export interface User {
	addr: string;
	cid: string;
	expiresAt: number;
	f_type: string;
	f_vsn: string;
	loggedIn: boolean;
	services: [];
}

export interface FindProfile {
	name: string;
	avatar: string;
}
