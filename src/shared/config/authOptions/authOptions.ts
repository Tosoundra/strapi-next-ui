import { api } from '@shared/api';
import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

export const authOptions: AuthOptions = {
	providers: [
		Credentials({
			type: 'credentials',
			credentials: {
				identifier: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
				rememberMe: { label: 'rememberMe', type: 'checkbox', required: false },
			},
			async authorize(credentials) {
				const { identifier, password, rememberMe } = credentials!;
				const authResponse = await api.auth.login({ identifier, password });

				if ('error' in authResponse) {
					return null;
				}
				cookies().set('jwt', authResponse.jwt, { httpOnly: true, maxAge: 3600 * 24 * 7 * 30, sameSite: 'lax' });

				if (rememberMe !== 'undefined') {
					cookies().set('remember', 'true', { httpOnly: true, maxAge: 3600 * 24 * 7 * 30, sameSite: 'lax' });
				} else {
					cookies().delete('remember');
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
				token.jwt = user.jwt;
			}
			return token;
		},

		async session({ token, session }) {
			return { ...session, jwt: token.jwt };
		},
	},
	pages: {
		signIn: '/',
	},
};
