import React from "react";
import useCartStore from "../context/cartStore";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between p-2 border">
            <span>{item.name}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600"
            >
              Supprimer
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;