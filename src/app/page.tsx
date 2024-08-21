import { SignInForm } from '@shared/ui';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SignIn() {
	const session = await getServerSession();
	const rememberMe = cookies().has('remember');

	if (session?.user && rememberMe) {
		redirect('/applications');
	}

	return <SignInForm />;
}
