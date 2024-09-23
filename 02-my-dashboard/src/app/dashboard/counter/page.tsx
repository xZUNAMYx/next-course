import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contador',
  description: 'Página de contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      
      <span>Productos en el carrito</span>

      <CartCounter />
    </div>
  );
}