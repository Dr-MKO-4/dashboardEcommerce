import React from "react";
import useCartStore from "../context/cartStore";

const dummyProducts = [
  { id: 1, name: "Chargeur rapide", price: 5000 },
  { id: 2, name: "Casque Bluetooth", price: 15000 },
];

const Products: React.FC = () => {
  const { addToCart } = useCartStore();

  return (
    <div>
      <h1 className="text-2xl font-bold p-5">Nos Produits</h1>
      <div className="grid grid-cols-2 gap-4 p-5">
        {dummyProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-green-600">{product.price} FCFA</p>
            <button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onClick={() => addToCart(product)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;