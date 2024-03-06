import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const res = await fetch('https://6396dca824fa79e2.mokky.dev/products');
			if (!res.ok) {
				return;
			}
			const data = await res.json() as Product[];
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}
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
			{products.map(p => (
				<ProductCard 
					key={p.id}
					id={p.id} 
					title={p.name} 
					description={p.ingredients.join(', ')} 
					rating={p.rating} 
					price={p.price} 
					image={p.image} 
				/>
			))}
		</div>
	</>;
}