import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import CarbonIcon from '../assets/images/icon-carbon-neutral.svg';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold text-stone-900">Dessert not found!</h1>
        <button 
          onClick={() => navigate('/')} 
          className="text-red-600 font-bold hover:underline"
        >
          Return to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 animate-in fade-in duration-500">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-stone-600 hover:text-red-600 transition-colors mb-8 font-semibold group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> 
        Back to Menu
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-stone-100">
        
        <div className="relative group">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-md"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-red-600 font-bold text-sm">
            {product.category}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 leading-tight">
            {product.name}
          </h1>
          
          <p className="text-stone-500 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>
          <div className="mb-10">
            <h3 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-4 border-b border-stone-100 pb-2">
              Key Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing, index) => (
                <span 
                  key={index} 
                  className="bg-stone-50 border border-stone-200 text-stone-600 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl font-black text-[#c73b0f]">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-lg">
                <img src={CarbonIcon} alt="" className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Eco-Friendly</span>
              </div>
            </div>

            <button 
              onClick={() => {
                addToCart(product);
                navigate('/'); 
              }}
              className="w-full bg-[#c73b0f] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all duration-300 shadow-lg active:scale-95"
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;