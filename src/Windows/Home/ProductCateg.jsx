import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCateg = () => {
    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Appliances" },
        { id: 3, name: "Gadgets" },
        { id: 4, name: "Books" },
        { id: 5, name: "Clothing" },
        { id: 6, name: "Toys" },
        { id: 7, name: "Phones" },
        // Add more categories as needed
    ];

    const products = [
        { id: 1, name: "Product 1", description: "Description 1", price: 99.99, image: "/path/to/image1.jpg" },
        { id: 2, name: "Product 2", description: "Description 2", price: 149.99, image: "/path/to/image2.jpg" },
        { id: 3, name: "Product 3", description: "Description 3", price: 199.99, image: "/path/to/image3.jpg" },
        { id: 4, name: "Product 4", description: "Description 4", price: 199.99, image: "/path/to/image3.jpg" },
        { id: 5, name: "Product 5", description: "Description 5", price: 199.99, image: "/path/to/image3.jpg" },
        { id: 6, name: "Product 6", description: "Description 6", price: 199.99, image: "/path/to/image3.jpg" },
        { id: 7, name: "Product 7", description: "Description 7", price: 199.99, image: "/path/to/image3.jpg" },
        // Add more products as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    const categorySettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const productSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", cursor: "pointer" }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", cursor: "pointer" }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 4.5l-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>
        );
    }

    return (
        <div className="container ml-20 mt-5 w-4/7">
            <div className="mb-4 rounded-md bg-slate-300">
                <Slider {...categorySettings}>
                    {categories.map((category) => (
                        <div key={category.id} className="px-2 text-white">
                            <button
                                className={`px-4 py-2 ${selectedCategory === category.id ? "bg-blue-500 text-grey-200" : "bg-slate-300 text-black"} rounded`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="product-carousel">
                <Slider {...productSettings}>
                    {products.map((product) => (
                        <div key={product.id} className="p-4">
                            <div className="bg-white rounded-lg shadow-md p-4 w-52 h-60">
                                <img src={product.image} alt={product.name} className="w-32 h-auto object-cover mb-4 rounded" />
                                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                                <p className="text-gray-700">{product.description}</p>
                                <p className="text-blue-500 font-bold mt-2">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCateg;
