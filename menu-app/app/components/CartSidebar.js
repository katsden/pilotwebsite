"use client";

export default function CartSidebar({ cart, onRemove, onClose }) {
  const total = cart.reduce((sum, c) => sum + c.item.price * c.qty, 0);
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(total);

  function handleCheckout() {
    if (cart.length === 0) return;
    // TODO: connect ke payment gateway / WhatsApp order
    alert("Pesanan diterima! Sistem pembayaran akan diintegrasikan segera.");
  }

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Keranjang Pesanan</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Keranjang masih kosong.</p>
          ) : (
            cart.map(({ item, qty }) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.name} (x{qty})</h4>
                  <p>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.price * qty)}
                  </p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>Hapus</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>{formatted}</span>
          </div>
          <button className="btn-checkout" disabled={cart.length === 0} onClick={handleCheckout}>
            Checkout & Bayar
          </button>
        </div>
      </div>
    </>
  );
}
