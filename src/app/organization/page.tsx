import { redirect, RedirectType } from 'next/navigation';

export default function Organization() {
	redirect('/organizations', RedirectType.replace);
}
