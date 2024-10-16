import React, { useEffect, useState, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Model/DbCon.js';

const categories = [
  { name: 'All', icon: 'fa-th-large' },
  { name: 'Electronics', icon: 'fa-tv' },
  { name: 'Books', icon: 'fa-book' },
  { name: 'Clothing', icon: 'fa-tshirt' },
  { name: 'Home', icon: 'fa-home' },
  { name: 'Sports', icon: 'fa-football-ball' },
  // Add more categories as needed
];

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const autoplayRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
        setFilteredProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
      setCurrentIndex(0); // Reset to first product in the new category
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    autoplayRef.current = nextProduct;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const interval = setInterval(play, 5000); // Change product every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredProducts.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredProducts.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const pauseAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  return (
    <div className="relative px-4 py-8" onMouseEnter={pauseAutoplay} onMouseLeave={() => { /* Resume autoplay if implemented */ }}>
      {/* Category Filters */}
      <div className="flex justify-center mb-6 space-x-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex items-center px-4 py-2 rounded-full border transition-colors duration-300 mb-2
              ${selectedCategory === category.name
                ? 'bg-teal-500 text-white border-teal-500'
                : 'bg-white text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'
              }`}
          >
            <i className={`fas ${category.icon} mr-2`}></i>
            {category.name}
          </button>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-between items-center mb-10">
        {/* Previous Button */}
        <button
          onClick={prevProduct}
          className="text-teal-500 hover:text-teal-700 font-semibold focus:outline-none"
          aria-label="Previous Product"
        >
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>

        {/* Products Display */}
        <div className="w-full overflow-hidden">
          <div className="flex justify-center">
            {filteredProducts.length === 0 ? (
              <p className="text-teal-500">No products available in this category.</p>
            ) : (
              <div className="flex space-x-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id || index}
                    className={`w-60 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform ${
                      index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                    }`}
                  >
                    <img className="w-full h-36 object-cover" src={product.image} alt={product.name} />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-teal-600">{product.name}</h3>
                      <p className="mt-2 text-gray-600">{product.description.slice(0, 100)}...</p>
                      <div className="mt-4 flex justify-between items-center">
                        <a href={product.link} className="text-teal-500 hover:text-teal-700 font-semibold">
                          Read More
                        </a>
                        <button className="text-teal-500 hover:text-teal-700">
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextProduct}
          className="text-teal-500 hover:text-teal-700 font-semibold focus:outline-none"
          aria-label="Next Product"
        >
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
