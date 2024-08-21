import NextAuth, { type User, type DefaultSession, type DefaultUser } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			username: string;
			email: string;
		};
		jwt: string;
	}
	interface User {
		user: {
			id: string;
			username: string;
			email: string;
		};
		jwt: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: string;
			username: string;
			email: string;
		};
		jwt: string;
	}
}
