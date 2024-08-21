import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function DELETE() {
	cookies().delete('jwt');
	return NextResponse.json({ message: 'success' }, { status: 201 });
}
