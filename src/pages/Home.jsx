import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CartItem from '../components/CartItem'; // Import the new component
import EmptyCartImg from '../assets/images/empty-cart.jpg';
import CarbonIcon from '../assets/images/icon-carbon-neutral.svg'; // Check your assets for this

const Home = ({ cartItems, addToCart, removeFromCart }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-stone-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold mb-8 text-stone-900">Desserts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map(item => (
              <ProductCard 
                key={item.id} 
                product={item} 
                onAdd={() => addToCart(item)} 
              />
            ))}
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
            <h2 className="text-2xl font-bold text-[#c73b0f] mb-6">
              Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>

            {cartItems.length === 0 ? (
              /* --- EMPTY STATE --- */
              <div className="flex flex-col items-center py-10 text-center">
                <img src={EmptyCartImg} alt="Empty Cart" className="w-32 mb-4" />
                <p className="text-stone-500 text-sm font-semibold">
                  Your added items will appear here
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="max-h-[400px] overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onRemove={removeFromCart} 
                    />
                  ))}
                </div>

                {/* Order Total Section */}
                <div className="flex items-center justify-between py-6">
                  <p className="text-stone-600 text-sm">Order Total</p>
                  <p className="text-3xl font-bold text-stone-900">${totalPrice.toFixed(2)}</p>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg flex items-center justify-center gap-2 mb-6">
                  <img src={CarbonIcon} alt="" className="w-5 h-5" />
                  <p className="text-xs text-stone-700">
                    This is a <span className="font-bold">carbon-neutral</span> delivery
                  </p>
                </div>

                <button className="w-full bg-[#c73b0f] text-white py-4 rounded-full font-bold text-sm hover:bg-[#a12e0c] transition-colors shadow-md">
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Home;