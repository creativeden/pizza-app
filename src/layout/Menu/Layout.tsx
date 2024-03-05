import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img width={90} height={90} src="/avatar.png" alt="Avatar" />
				<div className={styles['name']}>User Pizza</div>
				<div className={styles['email']}>upizza@test.loc</div>
			</div>
			<nav className={styles['menu']}>
				<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="ico menu" />
					Menu
				</NavLink>
				<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/cart-icon.svg" alt="ico cart" />
					Cart
				</NavLink>
			</nav>
			<Button className={styles['exit']}>
				<img src="/exit-icon.svg" alt="ico exit" />
				Exit
			</Button>
		</div>
		<div>
			<Outlet />
		</div>
	</div>;
}