import Link from 'next/link';

import withLayout from '../../components/withLayout';

const Product = ({ id, title }) => (
  <li key={id}>
    <Link href="/shop/products/[id]" as={`/shop/products/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Shop = () => {
  const products = [
    { id: 1, title: 'one' },
    { id: 2, title: 'two' },
  ];

  return (
    <ul>
      {/* <li>asd</li> */}
      {products.map(({ id, title }) => <Product id={id} title={title} />)}
    </ul>
  );
}

export default withLayout(Shop);
