import type { StrapiResponse, OrganizationType, UserStrapi } from '@lib/types';
import { GET, POST, PUT } from '@lib/utils';

export class OrganizationsApi {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/organizations`;
	}

	async getOrganizations(): Promise<StrapiResponse<OrganizationType[]> | { error: string }> {
		return GET(this.URL);
	}
	async getOrganization(id: string): Promise<StrapiResponse<OrganizationType>> {
		return GET(`${this.URL}/${id}`);
	}
	async getEmployees(id: string): Promise<StrapiResponse<{ id: number; users: UserStrapi[] }>> {
		return GET(`${this.URL}/${id}?fields[0]&populate=users`);
	}

	async updateOrganization(
		id: string,
		data: OrganizationType,
	): Promise<StrapiResponse<OrganizationType>> {
		return PUT(`${this.URL}/${id}`, data);
	}
}
