

import products from './EcommProducts';


const ArrayFilter = () => {
    const saleProducts = products.filter(product => product.onSale);
  
    return (
      <div>
        <h2>Items for Sale:</h2>
        <ul>
          {saleProducts.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ArrayFilter;
  
  
  
  

