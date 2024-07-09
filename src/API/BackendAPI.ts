import { GET } from '@lib/requestWrappers';

interface API {
	getApplications: () => Promise<any>;
	getApplication: (id: string) => Promise<any>;
}

class BackendAPI implements API {
	url: string;

	constructor() {
		this.url = process.env.STRAPI_BACKEND_API!;
	}
	async getApplications() {
		return GET(`${this.url}applications`);
	}

	async getApplication(id: string) {
		return GET(`${this.url}applications/${id}`);
	}
}

export const api = new BackendAPI();
