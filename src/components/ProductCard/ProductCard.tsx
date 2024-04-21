import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ProductCard(props: ProductCardProps) {
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['card-link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						<span className={styles['currency']}>$</span>{props.price}
					</div>
					<button className={styles['add-to-card']} onClick={add}>
						<img width={14} height={14} src="/plus-icon.svg" alt="add to basket" />
					</button>
					<div className={styles['rating']}>
						{props.rating}
                        &nbsp;
						<img width={14} height={14} src="/star-icon.svg" alt="Rating" />
					</div>
				</div>
				<div className={styles['foot']}>
					<div className={styles['title']}>{props.title}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;