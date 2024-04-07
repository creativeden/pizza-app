import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

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
			<Button className={styles['exit']} onClick={logout}>
				<img src="/exit-icon.svg" alt="ico exit" />
				Exit
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}