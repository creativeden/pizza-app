import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export function Layout() {
	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img width={90} height={90} src="/avatar.png" alt="Avatar" />
				<div className={styles['name']}>User Pizza</div>
				<div className={styles['email']}>upizza@test.loc</div>
			</div>
			<nav className={styles['menu']}>
				<Link to="/" className={styles['link']}>
					<img src="/menu-icon.svg" alt="ico menu" />
					Menu
				</Link>
				<Link to="/cart" className={styles['link']}>
					<img src="/cart-icon.svg" alt="ico cart" />
					Cart
				</Link>
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