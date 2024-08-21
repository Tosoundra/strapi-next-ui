import { ApplicationForm } from '@shared/ui';
import { NewApplication } from '@ui/NewApplication/NewApplication';
import { Metadata } from 'next';
import { useState } from 'react';

export const metadata: Metadata = {
	title: 'Создать заявку',
	description: 'Страница создании заявки',
};

const getApplicationId = () => {
	return Math.floor(Math.random() * 1000);
};

export default function CreateApplication() {
	const id = getApplicationId();
	return <NewApplication id={id} />;
}
