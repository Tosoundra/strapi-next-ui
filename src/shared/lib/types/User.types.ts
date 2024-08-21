export type UserStrapi = {
	readonly id: number;
	readonly username: string;
	readonly email: string;
	readonly phone: string;
};

export type UserStrapiResponse = {
	readonly jwt: string;
	readonly user: UserStrapi;
};
