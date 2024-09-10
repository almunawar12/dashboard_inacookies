import Image from 'next/image';
import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';

interface ProductItemProps {
    image: string;
    name: string;
    description: string;
    price: string;
    quantity: number;
    onAdd: () => void;
    onRemove: () => void;
  }

export default function ProductItems( { image, name, description, price, quantity, onAdd, onRemove }: ProductItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <Image src={image} alt={name} width={60} height={60} className="rounded-md" />
        <div className="ml-4">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-primary font-semibold">{price}</p>
        </div>
      </div>
      <div className="flex items-center">
        {quantity > 0 ? (
          <>
            <button onClick={onRemove} className="text-primary border border-primary rounded-full p-1">
              <FiMinus />
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={onAdd} className="text-primary border border-primary rounded-full p-1">
              <FiPlus />
            </button>
          </>
        ) : (
          <button onClick={onAdd} className="bg-primary text-white py-1 px-4 rounded-full">
            Add
          </button>
        )}
      </div>
    </div>
  )
}
