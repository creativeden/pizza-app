import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import { RootState } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import styles from './Cart.module.css';

const DELIVERY_FEE = 169;

export function Cart() {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
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
			<div className={styles['text']}>Итог: {items.length}</div>
			<div className={styles['price']}><span>$</span>{total + DELIVERY_FEE}</div>
		</div>
	</>;
}