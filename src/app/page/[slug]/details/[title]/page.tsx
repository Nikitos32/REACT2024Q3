import { ItemListProps, ResultPeople } from '@/app/constants/interfaces';
import { ModalPage } from '@/app/myPages/ModalPage';

interface dynamicParams {
  slug: string;
  title: string;
}

export async function generateStaticParams() {
  const names: dynamicParams[] = [];
  for (let i = 0; i < 9; i++) {
    const products: ItemListProps = await fetch(
      `https://swapi.dev/api/people/?page=${i + 1}`
    ).then((res) => res.json());
    products.results.map((product: ResultPeople) => {
      console.log(product.name);
      names.push({
        slug: '1',
        title: product.name.split(' ').join('%20'),
      });
    });
  }
  return names;
}

export default function ProductPage({ params }: { params: { title: string } }) {
  return <ModalPage params={params} />;
}
