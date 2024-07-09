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

export const POST = async (URL: string, data: BodyInit): Promise<any> => {
	try {
		const response = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
