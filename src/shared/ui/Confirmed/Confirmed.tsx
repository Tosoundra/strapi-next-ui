'use client';
import { Button } from '@shared/ui';
import { ComponentProps, FC, useState } from 'react';
import styles from './styles.module.scss';

export const Confirmed: FC<ComponentProps<'input'> & { isFilled: boolean }> = ({ isFilled, ...props }) => {
	return (
		<label className={styles['checkbox-container']}>
			<input className={styles.confirmed} type='checkbox' name='confirmed' id='confirmed' tabIndex={-1} {...props} />
			<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' version='1.0' viewBox='0 0 512 512'>
				<path
					fill={isFilled ? '#70DA55' : '#EAEAEA'}
					d='M233 1c-49.4 4.8-95 23-135 53.8C78.5 69.8 53.2 98 38.6 121c-6.3 9.9-18.6 35.1-23 47.1-4.9 13.4-10.2 34-12.8 49.9-3.1 19.5-3.1 56.5 0 76 4.5 27.6 11.6 49.8 23.7 74.5 13.2 26.9 26.9 46 48.9 68.1 22.1 22 41.2 35.7 68.1 48.9 24.7 12.1 46.9 19.2 74.5 23.7 19.5 3.1 56.5 3.1 76 0 27.6-4.5 49.8-11.6 74.5-23.7 26.9-13.2 46-26.9 68.1-48.9 22-22.1 35.7-41.2 48.9-68.1 8.8-17.9 13.2-29.6 18-47.6 6.3-24 7.8-37.1 7.8-64.9 0-27.8-1.5-40.9-7.8-64.9-4.8-18-9.2-29.7-18-47.6-13.2-26.9-26.9-46-48.9-68.1-22.1-22-41.2-35.7-68.1-48.9-24.6-12.1-47.4-19.3-74-23.5C279.8.7 247-.4 233 1zm156.9 145.2c5 1.6 12.7 9.1 14.8 14.6 2.4 6.4 2.2 14.7-.6 20.5-3.2 6.5-167.8 169.9-175.2 174-7.2 3.8-15.6 3.8-22.8-.1-4.2-2.2-80-70.1-92.9-83.2-5.1-5.1-7.6-11.3-7.5-18.5.2-15.1 11.3-25.3 26.3-24.3 3.6.3 8 1.2 9.7 2.2 2.7 1.3 53.2 46.8 69.6 62.5l4.7 4.6 74.8-74.7c41.1-41 76.1-75.3 77.9-76.2 6.9-3.5 13.1-3.9 21.2-1.4z'
				/>
			</svg>
		</label>
	);
};
