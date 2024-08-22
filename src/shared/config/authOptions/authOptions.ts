import { api } from '@shared/api';
import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
	providers: [
		Credentials({
			type: 'credentials',
			credentials: {
				identifier: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			async authorize(credentials) {
				const { identifier, password } = credentials!;
				const authResponse = await api.auth.login({ identifier, password });

				if ('error' in authResponse) {
					return null;
				}
				return authResponse;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.email = user.user.email;
				token.name = user.user.username;
				token.id = user.user.id;
				token.jwt = user.jwt;
			}
			return token;
		},

		async session({ token, session }) {
			return { ...session, jwt: token.jwt, id: token.id };
		},
	},
	pages: {
		signIn: '/',
	},
};
