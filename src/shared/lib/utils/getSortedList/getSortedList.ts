export const getSortedList = <T extends Record<string, any>, K extends keyof T>(
	list: T[],
	key: K extends string ? (T[K] extends string ? K : never) : never,
): T[] => {
	return [...list].sort((a, b) => a[key]!.toLowerCase().localeCompare(b[key]!.toLowerCase()));
};
