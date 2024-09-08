import { CustomError, RegisterUserData, UserStrapiResponse } from '@shared/lib/types';
import { POST } from '@shared/lib/utils';

type Credentials = {
	identifier: string;
	password: string;
};

interface AuthType {
	login: (credentials: Credentials) => Promise<UserStrapiResponse | CustomError>;
	register: (registerData: RegisterUserData) => Promise<UserStrapiResponse | CustomError>;
}

export class AuthApi implements AuthType {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/auth/local`;
	}

	async login(credentials: Credentials): Promise<UserStrapiResponse | CustomError> {
		return POST(this.URL, credentials);
	}

	async register(registerData: RegisterUserData): Promise<UserStrapiResponse | CustomError> {
		return POST(`${this.URL}/register`, registerData);
	}
}
