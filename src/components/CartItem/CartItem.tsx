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
	};

	const remove = () => {
	};

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;$</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={descrease}>
					<img width={14} height={14} src="/plus-icon.svg" alt="remove from basket" />
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img width={14} height={14} src="/plus-icon.svg" alt="add to basket" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img width={14} height={14} src="/plus-icon.svg" alt="remove all" />
				</button>
			</div>
		</div>
	);
}

export default CartItem;