import { useDispatch, useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import { AppDispatch, RootState } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';

const DELIVERY_FEE = 15;

export function Cart() {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const jwt = useSelector((s: RootState) => s.user.jwt);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	
	const total = items.map(i => {
		const product = cartProducts.find(p => p.id === i.id);
		if (!product) {
			return 0;
		}
		return i.count * product.price;
	}).reduce((acc, i) => acc += i, 0);

	useEffect(() => {
		const getItem = async (id: number) => {
			const { data } = await axios.get(`https://6396dca824fa79e2.mokky.dev/products/${id}`);
			return data;
		};

		const loadAllItems = async () => {
			const res = await Promise.all(items.map(i => getItem(i.id)));
			setCartProducts(res);
		};

		loadAllItems();
	}, [items]);

	const chekout = async () => {
		await axios.post('https://6396dca824fa79e2.mokky.dev/orders', {
			products: items
		}, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		dispatch(cartActions.clean());
		navigate('/success');
	};

	return <>
		<Headling className={styles['headling']}>Cart</Headling>
		{items.map(i => {
			const product = cartProducts.find(p => p.id === i.id);
			if (!product) {
				return;
			}
			return <CartItem key={product.id} count={i.count} {...product} />;
		})}
		<div className={styles['line']}>
			<div className={styles['text']}>Итог:</div>
			<div className={styles['price']}>
				<span>$</span>{total}
			</div>
		</div>
		<hr className={styles['hr']} />
		<div className={styles['line']}>
			<div className={styles['text']}>Доставка:</div>
			<div className={styles['price']}><span>$</span>{DELIVERY_FEE}</div>
		</div>
		<hr className={styles['hr']} />
		<div className={styles['line']}>
			<div className={styles['text']}>Итог: <span className={styles['total-count']}>({items.length})</span></div>
			<div className={styles['price']}><span>$</span>{total + DELIVERY_FEE}</div>
		</div>
		<div className={styles['chekout']}>
			<Button appearence='big' onClick={chekout}>Chekout</Button>
		</div>
	</>;
}