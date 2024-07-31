import { auth } from '@api/Auth';
import { UserStrapiResponse } from '@lib/types/UserStrapiResponse.types';
import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export const authConfig: AuthOptions = {
	providers: [
		Credentials({
			type: 'credentials',
			credentials: {
				identifier: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},

			async authorize(credentials) {
				console.log(credentials);

				const { user, error } = await auth.login(credentials);

				if (!error) {
					return null;
				}
				return { id: user.id, name: user.username, email: user.email };
			},
		}),
	],

	pages: {
		signIn: '/',
	},
};
