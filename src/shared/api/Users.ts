import { UserStrapi } from '@lib/types';
import { GET, POST } from '@lib/utils';

export class UsersApi {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/users`;
	}
	async getUsers(): Promise<UserStrapi[]> {
		return GET(`${this.URL}`);
	}

	async getUser(id: string): Promise<UserStrapi> {
		return GET(`${this.URL}/${id}`);
	}
}
