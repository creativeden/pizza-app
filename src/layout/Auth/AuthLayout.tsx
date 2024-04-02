import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img width={300} src="https://dodopizza.ru/dist/be20534fd8b4b6d47024.svg" alt="Logo" />
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}