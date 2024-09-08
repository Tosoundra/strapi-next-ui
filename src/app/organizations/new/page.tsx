import { Organization } from '@entities/ui';
import { redirect, RedirectType } from 'next/navigation';
import { createNewOrganizationHandle } from './api/createNewOrganizationHandle';

const declineFormHandler = async () => {
	'use server';
	redirect('/organizations', RedirectType.push);
};

export default function CreateOrganization() {
	return (
		<Organization
			email=''
			name=''
			phone=''
			id={0}
			initialActive
			formAction={createNewOrganizationHandle}
			declineFormHandler={declineFormHandler}
		/>
	);
}
