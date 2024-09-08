import { type UserStrapi, UserWithIdStrapi } from '@shared/lib/types';
import { DELETE, GET, POST, PUT } from '@shared/lib/utils';

export class UsersApi {
	private URL: string;
	private CLIENT_URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/users`;
		this.CLIENT_URL = `${process.env.NEXT_PUBLIC_STRAPI_BACKEND_API}/users`;
	}
	async getUsers(): Promise<UserWithIdStrapi[]> {
		return GET(`${this.URL}`);
	}

	async getUser(id: string): Promise<UserWithIdStrapi> {
		return GET(`${this.URL}/${id}`);
	}

	async updateUser(id: string, data: UserStrapi): Promise<UserWithIdStrapi> {
		return PUT(`${this.URL}/${id}`, data);
	}

	async deleteUser(id: string, jwt: string): Promise<UserWithIdStrapi> {
		return DELETE(`${this.CLIENT_URL}/${id}`, jwt);
	}
}
