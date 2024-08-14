import Link from 'next/link';
import styles from './notFound.module.scss';
import classNames from 'classnames';

export default function NotFound() {
	return (
		<div className={styles.containerStyle}>
			<div>
				<h1 className={classNames(styles['next-error-h1'], styles.headingStyle)}>404</h1>
				<div>
					<h2 className={styles.subheadingStyle}>This page could not be found.</h2>
					<Link style={{ color: 'revert' }} href='/applications' replace={true}>
						Return home
					</Link>
				</div>
			</div>
		</div>
	);
}
