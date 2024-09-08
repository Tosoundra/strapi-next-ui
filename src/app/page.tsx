import { SignInForm } from '@shared/ui';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
	const session = await getServerSession();
	// const rememberMe = localStorage.getItem('remember');

	if (session?.user ) {
		redirect('/applications');
	}

	return <SignInForm />;
}
