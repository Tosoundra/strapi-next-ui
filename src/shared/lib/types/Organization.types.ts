export type OrganizationType = {
	name: string;
	email: string;
	phone: string;
};

export type OrganizationWithId = {
	id: number;
} & OrganizationType;
