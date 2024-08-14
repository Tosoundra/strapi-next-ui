import { cookies } from 'next/headers';

type ErrorApiResponse = {
	readonly error: any;
};

export const GET = async (URL: string): Promise<any> => {
	try {
		const cookie = cookies().get('jwt');
		const response = await fetch(URL, {
			headers: {
				Authorization: `Bearer ${cookie?.value}`,
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return await response.json();
	} catch (error) {
		console.log(error, 'error logger');
	}
};

export const POST = async (URL: string, data: unknown): Promise<any | ErrorApiResponse> => {
	try {
		const cookie = cookies().get('jwt');
		const response = await fetch(URL, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookie?.value}`,
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});
		if (!response.ok) {
			const { error } = await response.json();
			console.log('##########', error, 'fetch helpers ------- POST', '##########');

			throw new Error(error.status);
		}

		return await response.json();
	} catch (error) {
		if (error instanceof Error) {
			return { error: error.message };
		}
	}
};
