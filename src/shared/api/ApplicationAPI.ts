import { GET } from '@lib/utils';

interface API {
	getApplications: () => Promise<any[]>;
	getApplication: (id: string) => Promise<any>;
}

class BackendAPI implements API {
	URL: string;

	constructor() {
		this.URL = process.env.STRAPI_BACKEND_API!;
	}
	async getApplications(): Promise<any[]> {
		return GET(`${this.URL}applications`);
	}

	async getApplication(id: string) {
		return GET(`${this.URL}applications/${id}`);
	}

	async getDiscussionList(id: string, discussionId: string) {
		return GET(`${this.URL}applications/${id}`);
	}
}

export const api = new BackendAPI();
