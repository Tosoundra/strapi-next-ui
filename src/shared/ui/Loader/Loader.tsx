import { ComponentProps, FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Loader: FC<ComponentProps<'span'>> = ({ ...props }) => {
	return <span className={classNames(styles.loader, props.className)}></span>;
};
