// src/components/ProductCarousel.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Model/DbCon.js';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsList = querySnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="flex justify-between mb-10 mt-10">
        <button onClick={prevProduct} className="text-teal-500 hover:text-teal-700 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg></button>
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`w-60 mx-auto bg-slate-950 shadow-lg rounded-lg overflow-hidden transition-transform transform ${
                  index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'
                }`}
              >
                <img className="w-full h-36 object-cover" src={product.image} alt={product.name} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-white">{product.description}</p>
                  <div className="mt-4">
                    <a href={product.link} className="text-teal-500 hover:text-teal-700 font-semibold">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextProduct} className="text-teal-500 hover:text-teal-700 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
      </div>
    </div>
  );
};

export default ProductCarousel;








