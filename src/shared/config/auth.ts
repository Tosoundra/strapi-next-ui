import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
	providers: [
		Credentials({
			type: 'credentials',
			name: 'auth by credentials',
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
      //@ts-ignore
			async authorize(credentials, req) {},
		}),
	],
};
