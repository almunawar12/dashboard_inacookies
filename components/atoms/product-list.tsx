'use client'
import React, { useState } from 'react';
import ProductItems from './product-items';
import { CartItem } from '@/services/data-types';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

const products = [
    {
        id: 1,
        image: '/images/cake.jpg',
        name: 'New Yorker',
        description: 'Gluten free chocolate cake',
        price: 25000,
    },
    {
        id: 2,
        image: '/images/cake.jpg',
        name: 'Cupcake Choco Nut',
        description: 'Cupcake with premium chocolate',
        price: 29000,
    },
    {
        id: 3,
        image: '/images/cake.jpg',
        name: 'Signature Choco Nut',
        description: 'Slice Premium cake with chocolate',
        price: 40000,
    },
];

export default function ProductList() {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [cart, setCart] = useState<CartItem[]>([]);
    const router = useRouter();

    const handleAdd = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));

        const product = products.find((product) => product.id === id);
        if (product) {
            setCart((prevCart) => {
                const productInCart = prevCart.find((item) => item.id === id);
                if (productInCart) {
                    return prevCart.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevCart, { ...product, quantity: 1 }];
            });
        }
    };

    const handleRemove = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0),
        }));

        setCart((prevCart) => {
            const productInCart = prevCart.find((item) => item.id === id);
            if (productInCart?.quantity === 1) {
                return prevCart.filter((item) => item.id !== id);
            }
            return prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.error('keranjang kosong')
            return;
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            router.push('/checkout-detail');
        }
    };

    return (
        <div className="relative min-h-screen pb-16">
            <div className="flex-grow p-4">
                {products.map((product) => (
                    <ProductItems
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={`Rp.${product.price.toLocaleString('id-ID')}`}
                        quantity={quantities[product.id] || 0}
                        onAdd={() => handleAdd(product.id)}
                        onRemove={() => handleRemove(product.id)}
                    />
                ))}
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md flex justify-center">
                <button
                    className="bg-primary text-white py-2 px-8 rounded-full"
                    onClick={handleCheckout}
                >
                    Keranjang ({cart.length} item)
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
