import { useNavigate } from 'react-router-dom';
import AddToCartIcon from '../assets/images/icon-add-to-cart.svg';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mb-8 group">
      <div className="relative mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full aspect-square object-cover rounded-xl border-2 border-transparent group-hover:border-red-600 transition-all duration-300 cursor-pointer shadow-sm"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-stone-400 px-10 py-2.5 rounded-full font-bold flex items-center gap-2 hover:text-red-600 hover:border-red-600 transition-all shadow-md whitespace-nowrap">
          <img src={AddToCartIcon} alt="" className="w-5 h-5" />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-stone-500 text-sm">{product.category}</p>
        <h2 className="text-stone-900 font-bold text-lg">{product.name}</h2>
        <p className="text-red-600 font-bold text-lg">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;