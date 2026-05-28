import { useCart } from "@/context/cart";
import { ShoppingCart, X, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";

export default function CartSidebar() {
  const { items, isOpen, closeCart, subtotal, itemCount, updateQuantity, removeItem } = useCart();
  const [, setLocation] = useLocation();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#CFD9E6]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-[#001A2E]" />
            <h2 className="font-extrabold text-[#07121A] text-lg">
              Your Cart
            </h2>
            <span className="bg-[#001A2E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-[#F0F4F8] transition-colors"
          >
            <X className="h-5 w-5 text-[#526880]" />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="h-16 w-16 rounded-full bg-[#F0F4F8] flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-[#CFD9E6]" />
              </div>
              <p className="text-[#07121A] font-bold text-base mb-1">Your cart is empty</p>
              <p className="text-[#526880] text-sm mb-6">
                Start shopping to add products to your cart.
              </p>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#001A2E] text-white text-sm font-bold hover:bg-[#012B4A] transition-colors"
              >
                Continue Shopping <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-[#F0F4F8] rounded-xl p-3 border border-[#CFD9E6]/50"
              >
                {/* Image */}
                <div className="h-20 w-20 bg-white rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={`${base}/${item.image}`}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `${base}/cat-electronics.png`;
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#526880] uppercase tracking-wider mb-0.5">
                    {item.brand}
                  </p>
                  <p className="text-sm font-bold text-[#07121A] leading-snug line-clamp-2 mb-1">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-[#526880] mb-2">
                    SKU: {item.sku}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 flex items-center justify-center rounded border border-[#CFD9E6] bg-white hover:bg-[#F0F4F8] transition-colors"
                      >
                        <Minus className="h-3 w-3 text-[#526880]" />
                      </button>
                      <span className="text-sm font-bold text-[#07121A] w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 flex items-center justify-center rounded border border-[#CFD9E6] bg-white hover:bg-[#F0F4F8] transition-colors"
                      >
                        <Plus className="h-3 w-3 text-[#526880]" />
                      </button>
                    </div>

                    {/* Price + remove */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#001A2E]">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="h-6 w-6 flex items-center justify-center rounded hover:bg-red-50 transition-colors"
                        title="Remove"
                      >
                        <X className="h-3.5 w-3.5 text-[#526880] hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#CFD9E6] px-5 py-5 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#526880]">Subtotal</span>
              <span className="text-lg font-extrabold text-[#07121A]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  closeCart();
                  setLocation(`${base}/checkout`);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#015D2C] text-white font-bold text-sm tracking-wide hover:bg-[#014a23] transition-colors"
              >
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={closeCart}
                className="flex items-center justify-center w-full py-2.5 rounded-lg border border-[#CFD9E6] text-[#526880] font-bold text-sm hover:bg-[#F0F4F8] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
