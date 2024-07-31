export const GET = async (URL: string): Promise<any> => {
	try {
		const response = await fetch(URL);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const POST = async <T>(URL: string, data: unknown): Promise<T | { readonly error: string }> => {
	try {
		const response = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return await response.json();
	} catch (error) {
		return { error: error.message };
	}
};
