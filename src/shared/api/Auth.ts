import { UserStrapiResponse } from '@lib/types';
import { POST } from '@lib/utils';

type Credentials = {
	identifier: string;
	password: string;
};

type RegisterData = {
	username: string;
	email: string;
	password: string;
	phone: string;
	organization: {
		id: number;
	};
};

interface AuthType {
	login: (credentials: Credentials) => Promise<UserStrapiResponse>;
	register: (registerData: RegisterData) => Promise<UserStrapiResponse>;
}

export class Auth implements AuthType {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/auth/local`;
	}

	async login(credentials: Credentials): Promise<UserStrapiResponse> {
		return POST(this.URL, credentials);
	}

	async register(registerData: RegisterData): Promise<UserStrapiResponse> {
		return POST(`${this.URL}/register`, registerData);
	}
}
