
import RemoveIcon from '../assets/images/icon-remove-item.svg';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-stone-100 last:border-0">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-stone-900 text-sm">{item.name}</p>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[hsl(14,86%,42%)] font-bold">{item.quantity}x</span>
          <span className="text-stone-400">@ ${item.price.toFixed(2)}</span>
          <span className="text-stone-500 font-bold">${(item.quantity * item.price).toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={() => onRemove(item.id)}
        className="group border border-stone-400 rounded-full p-1 hover:border-stone-900 transition-colors"
      >
        <img 
          src={RemoveIcon} 
          alt="Remove" 
          className="w-3 h-3 group-hover:brightness-0" 
        />
      </button>
    </div>
  );
};

export default CartItem;