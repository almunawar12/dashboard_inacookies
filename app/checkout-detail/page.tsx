'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface CartItem {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export default function CheckoutDetail() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>('creditCard');
    const router = useRouter();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const cartItems: CartItem[] = JSON.parse(storedCart);
            setCart(cartItems);

            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotalPrice(total);
        }
    }, []);

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    const handleBack = () => {
        router.back();
    };

    const updateCartItem = (id: number, quantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const handleAddQuantity = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            updateCartItem(id, item.quantity + 1);
        }
    };

    const handleRemoveQuantity = (id: number) => {
        const item = cart.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            updateCartItem(id, item.quantity - 1);
        } else if (item && item.quantity === 1) {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotalPrice(total);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Checkout Detail</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
                            <div className="flex items-center">
                                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-md" />
                                <div className="ml-4">
                                    <h3 className="text-base font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                    <p className="text-primary font-semibold">Rp.{item.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                            <div className="flex items-center text-right">
                                <button onClick={() => handleRemoveQuantity(item.id)} className="text-primary border border-primary rounded-full p-1">
                                    <FiMinus />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => handleAddQuantity(item.id)} className="text-primary border border-primary rounded-full p-1">
                                    <FiPlus />
                                </button>
                                <p className="ml-4 text-primary font-semibold">Subtotal: Rp.{(item.price * item.quantity).toLocaleString('id-ID')}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between font-semibold mt-4">
                        <div>Total</div>
                        <div>Rp.{totalPrice.toLocaleString('id-ID')}</div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Pilih Metode Pembayaran</h2>
                        <form>
                            <div className="mb-4">
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={handlePaymentMethodChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Kartu Kredit/Debit</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bankTransfer"
                                        checked={paymentMethod === 'bankTransfer'}
                                        onChange={handlePaymentMethodChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Transfer Bank</span>
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <button
                            onClick={handleBack}
                            className="bg-gray-500 w-full text-white py-2 px-4 rounded mb-2"
                        >
                            Kembali
                        </button>
                        <button
                            className="bg-primary w-full text-white py-2 px-4 rounded"
                        >
                            Bayar
                        </button>
                    </div>
                </div>
            ) : (
                <p>Keranjang kosong</p>
            )}
        </div>
    );
}
