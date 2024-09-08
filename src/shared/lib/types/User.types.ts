export type UserStrapi = {
	readonly username: string;
	readonly email: string;
	readonly phone: string;
};

export type UserStrapiResponse = {
	readonly jwt: string;
	readonly user: UserStrapi;
};

export type UserWithIdStrapi = { id: number } & UserStrapi;

export type RegisterUserData = {
	password: string;
	organization: {
		id: number;
	};
} & UserStrapi;
