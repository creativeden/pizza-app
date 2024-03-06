import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	return <>
		<div className={styles['head']}>
			<Headling>Menu</Headling>
			<Search placeholder='Write what you look' />
		</div>
		<div>
			<ProductCard 
				id={1} 
				title='Delishes' 
				description='Salami, Rukola, Tomato, Olive' 
				rating={4.5} 
				price={300} 
				image='https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_584x584.webp' 
			/>
		</div>
	</>;
}