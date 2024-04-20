import { CartItemProps } from './CartItem.props';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;$</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease}>
					{/* <img width={14} height={14} src="/plus-icon.svg" alt="remove from basket" /> */}
					<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					{/* <img width={14} height={14} src="/plus-icon.svg" alt="add to basket" /> */}
					<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g></svg>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<svg width="16" height="16" fill="#454B54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z" fill="#000"></path></svg>
					{/* <img width={14} height={14} src="/plus-icon.svg" alt="remove all" /> */}
				</button>
			</div>
		</div>
	);
}

export default CartItem;