
import products from './EcommProducts';


const ArraySort = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  
    return (
      <div>
        <h2>Sorted List of Items:</h2>
        <ul>
          {sortedProducts.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ArraySort;