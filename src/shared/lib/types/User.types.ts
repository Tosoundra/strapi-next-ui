export type UserStrapi = {
	readonly id: number;
	readonly username: string;
	readonly email: string;
	readonly phone: string;
	// readonly provider: string;
	// readonly confirmed: boolean;
	// readonly blocked: boolean;
	// readonly createdAt: string;
	// readonly updatedAt: string;
};

export type UserSignInResponse = {
	readonly jwt: string;
	readonly user: UserStrapi;
};
