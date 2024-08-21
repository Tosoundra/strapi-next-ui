import { api } from '@api/Api';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
	const response = await api.organizations.updateOrganization(await request.json());

	return NextResponse.json({ status: 400 });
}