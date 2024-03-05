import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export function Layout() {
	return <div className={styles['layout']}>
		<nav className={styles['menu']}>
			<Link to="/">Menu</Link>
			<Link to="/cart">Cart</Link>
		</nav>
		<div>
			<Outlet />
		</div>
	</div>;
}