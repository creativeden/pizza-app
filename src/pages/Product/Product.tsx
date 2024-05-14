import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import Headling from '../../components/Headling/Headling';

export function Product() {
	const data = useLoaderData() as { data: Product };

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await 
				resolve={data.data}
			>
				{({ data }: { data: Product }) => (
					<>
						<div><img src={data.image} alt="..." /></div>
						<Headling>{data.name}</Headling>
						<div>Price - {data.price}</div>
						<div>Rating - {data.rating}</div>
						<div>Ingredients - {data.ingredients.join(', ')}</div>
					</>
				)}
			</Await>
		</Suspense>
	</>;
}