import { ApplicationsApi } from './ApplicationAPI';
import { Auth } from './Auth';
import { OrganizationsApi } from './OrganizationsApi';
import { UsersApi } from './Users';

class API {
	applications: ApplicationsApi;
	organizations: OrganizationsApi;
	users: UsersApi;
	auth: Auth;
	constructor() {
		this.applications = new ApplicationsApi();
		this.organizations = new OrganizationsApi();
		this.users = new UsersApi();
		this.auth = new Auth();
	}
}

export const api = new API();
