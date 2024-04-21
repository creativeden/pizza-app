import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

export function Success() {
	const navigate = useNavigate();
	return(
		<div className={styles['success']}>
			<img width={300} src="https://dodopizza.ru/dist/be20534fd8b4b6d47024.svg" alt="Logo" />
			<div className={styles['text']}>Your order success!</div>
			<Button appearence='big' onClick={() => navigate('/')}>Made new order</Button>
		</div>
	);
}