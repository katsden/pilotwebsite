"use client";

export default function Cart({ cart, onRemove, onClose }) {
  const total = cart.reduce((sum, c) => sum + c.item.price * c.qty, 0);
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(total);

  function handleOrder() {
    // TODO: connect to backend / WhatsApp order / payment gateway
    alert("Order placed! (connect backend here)");
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl max-h-[75vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg">Your Order</h2>
          <button onClick={onClose} className="text-gray-400 text-sm">
            Close
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8">
              Cart is empty.
            </p>
          ) : (
            cart.map(({ item, qty }) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">x{qty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.price * qty)}
                  </p>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-400 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium">Total</p>
            <p className="font-semibold text-lg">{formatted}</p>
          </div>
          <button
            onClick={handleOrder}
            disabled={cart.length === 0}
            className="w-full bg-gray-900 text-white py-3 rounded-full text-sm disabled:opacity-40"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
