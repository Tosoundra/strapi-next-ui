import { StrapiResponse, Organization, UserStrapi } from '@lib/types';
import { GET } from '@lib/utils';

export class OrganizationsApi {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/organizations`;
	}

	async getOrganizations(): Promise<StrapiResponse<Organization[]>> {
		return GET(this.URL);
	}

	async getOrganization(id: string): Promise<StrapiResponse<Organization>> {
		return GET(`${this.URL}/${id}`);
	}
	async getEmployees(id: string): Promise<StrapiResponse<{ id: number; users: UserStrapi[] }>> {
		return GET(`${this.URL}/${id}?fields[0]&populate=users`);
	}
}
