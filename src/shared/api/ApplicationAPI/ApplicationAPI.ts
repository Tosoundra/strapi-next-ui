import { GET } from '@shared/lib/utils';

export class ApplicationsApi {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/applications`;
	}
	async getApplications(): Promise<any[]> {
		return GET(`${this.URL}`);
	}

	async getApplication(id: string) {
		return GET(`${this.URL}/${id}`);
	}

	async getDiscussionList(id: string, discussionId: string) {
		return GET(`${this.URL}/${id}`);
	}
}
