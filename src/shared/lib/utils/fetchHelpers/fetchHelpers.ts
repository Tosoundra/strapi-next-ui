import { authOptions } from '@shared/config';
import { StrapiError } from '@shared/lib/types';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

type ErrorApiResponse = {
	readonly error: any;
};

export const GET = async (URL: string): Promise<any> => {
	const session = await getServerSession(authOptions);
	console.clear();
	console.log('##########', URL, 'fetch helpers ------- POST', '##########');
	try {
		const response = await fetch(URL, {
			headers: {
				Authorization: `Bearer ${session?.jwt}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error(await response.json());
		}
		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			console.log(error);

			return { error: error.message };
		}
	}
};

export const POST = async (URL: string, data: any): Promise<any | StrapiError> => {
	try {
		const session = await getServerSession(authOptions);

		const response = await fetch(URL, {
			method: 'POST',
			headers: {
				Authorization: session?.jwt ? `Bearer ${session.jwt}` : '',
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});
		if (!response.ok) {
			const { error } = (await response.json()) as StrapiError;
			console.log('##########', error, 'fetch helpers ------- POST', '##########');

			throw new Error(error.message);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			return { error: error.message };
		}
	}
};

export const PUT = async (URL: string, data: any): Promise<any | ErrorApiResponse> => {
	try {
		const session = await getServerSession(authOptions);

		const response = await fetch(URL, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${session?.jwt}`,
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});
		if (!response.ok) {
			const { error } = await response.json();
			console.log('##########', error, 'fetch helpers ------- PUT', '##########');

			throw new Error(error.status);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			return { error: error.message };
		}
	}
};

export const DELETE = async (URL: string, jwt: string): Promise<any | ErrorApiResponse> => {
	try {
		const response = await fetch(URL, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			const { error } = await response.json();
			console.log('##########', error, 'fetch helpers ------- DELETE', '##########');

			throw new Error(error.status);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			return { error: error.message };
		}
	}
};
