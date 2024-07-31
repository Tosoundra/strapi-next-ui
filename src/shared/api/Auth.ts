import { UserStrapiResponse } from '@lib/types/UserStrapiResponse.types';
import { GET, POST } from '@lib/utils';
import { User } from 'next-auth';

type Credentials = {
	identifier: string;
	password: string;
};

interface AuthType {
	login: (credentials: Credentials) => Promise<any>;
	register: (credentials: Credentials) => Promise<any>;
}

class Auth implements AuthType {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}auth/local`;
	}

	async login(credentials: Credentials) {
		return POST<UserStrapiResponse>(this.URL, credentials);
	}

	async register(credentials: Credentials) {
		return POST(`${this.URL}/register`, credentials);
	}
}

export const auth = new Auth();
