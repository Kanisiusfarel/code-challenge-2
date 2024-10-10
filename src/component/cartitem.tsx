import React from 'react';

interface CartItemProps {
  title: string;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ title, price }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{title}</span>
      <span>${price}</span>
    </div>
  );
};

export default CartItem;
