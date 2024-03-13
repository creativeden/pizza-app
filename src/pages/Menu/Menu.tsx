import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Product[]>('https://6396dca824fa79e2.mokky.dev/products');
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
		// try {
		// 	const res = await fetch('https://6396dca824fa79e2.mokky.dev/products');
		// 	if (!res.ok) {
		// 		return;
		// 	}
		// 	const data = await res.json() as Product[];
		// 	setProducts(data);
		// } catch (e) {
		// 	console.error(e);
		// 	return;
		// }
	};

	useEffect(() => {
		getMenu();
	}, []);

	return <>
		<div className={styles['head']}>
			<Headling>Menu</Headling>
			<Search placeholder='Write what you look' />
		</div>
		<div>
			{error && <>{error}</>}
			{!isLoading && <MenuList products={products} />}
			{isLoading && <>Загружаем продукты...</>}
		</div>
	</>;
}