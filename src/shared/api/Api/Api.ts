import { ApplicationsApi } from '../ApplicationAPI/ApplicationAPI';
import { AuthApi } from '../AuthApi/AuthApi';
import { OrganizationsApi } from '../OrganizationsApi/OrganizationsApi';
import { UsersApi } from '../UsersApi/UsersApi';

class API {
	applications: ApplicationsApi;
	organizations: OrganizationsApi;
	users: UsersApi;
	auth: AuthApi;
	constructor() {
		this.applications = new ApplicationsApi();
		this.organizations = new OrganizationsApi();
		this.users = new UsersApi();
		this.auth = new AuthApi();
	}
}

export const api = new API();
