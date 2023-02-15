

import products from './EcommProducts';

const ArrayReduce = () => {
  const totalAmount = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Total cost of all products: ${totalAmount}</h2>
    </div>
  );
};

export default ArrayReduce;
