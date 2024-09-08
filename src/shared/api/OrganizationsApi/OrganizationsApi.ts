import type {
	StrapiResponse,
	OrganizationType,
	UserStrapi,
	UserWithIdStrapi,
	OrganizationWithId,
} from '@shared/lib/types';
import { GET, POST, PUT } from '@shared/lib/utils';

export class OrganizationsApi {
	private URL: string;

	constructor() {
		this.URL = `${process.env.STRAPI_BACKEND_API}/organizations`;
	}

	async getOrganizations(): Promise<StrapiResponse<OrganizationWithId[]>> {
		return GET(this.URL + '?sort=name');
	}
	async getOrganization(id: string): Promise<StrapiResponse<OrganizationWithId>> {
		return GET(`${this.URL}/${id}`);
	}
	async getEmployees(id: string): Promise<StrapiResponse<{ id: number; users: UserWithIdStrapi[] }>> {
		return GET(`${this.URL}/${id}?fields[0]&populate=users`);
	}
	async createOrganization(data: OrganizationType): Promise<StrapiResponse<OrganizationWithId>> {
		return POST(this.URL, data);
	}
	async updateOrganization(id: string, data: OrganizationType): Promise<StrapiResponse<OrganizationWithId>> {
		return PUT(`${this.URL}/${id}`, data);
	}
}
