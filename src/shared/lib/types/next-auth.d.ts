import NextAuth, { type User, type DefaultSession, type DefaultUser } from 'next-auth';
import { SignInResponse } from 'next-auth/react';

declare module 'next-auth' {
	interface Session {
		user: {
			id: number;
			username: string;
			email: string;
		};
		jwt: string;
	}
	interface User {
		user: {
			id: number;
			username: string;
			email: string;
		};
		user:SignInResponse
		jwt: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: number;
			username: string;
			email: string;
		};
		jwt: string;
		id: number;
	}
}
