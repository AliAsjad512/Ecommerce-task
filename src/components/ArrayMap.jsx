
import products from './EcommProducts';


const ArrayMap = () => {
    return (
      <div>
        <h2>Items List:</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ArrayMap;