import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = ({ setshowcart }: any) => {
  const state = useSelector((state: any) => state);

  const gettotol = () => {
    let total = 0;
    state.cart.forEach((item: any) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  return;
  <div
    className="
   bg-[#E0000006] w-full min-h-screen fixed left-0 top-0 z-20 opacity-[0.6]
  "
  >
    <div
      className="max-w-[400px]
    w-full h-screen bg-white  absolute right-0 top-0 p-6"
    >
      <div
        onClick={() => setshowcart(false)}
        className="text-3xl  cursor-pointer"
      >
        X
      </div>
      <h1 className="text-3xl font-bold">Cart</h1>
      {state.cart.map((item: any) => {
        return (
          <CartProduct
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
          />
        );
      })}
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Total</h1>
        <h1 className="text-2xl font-bold">${gettotol()}</h1>
      </div>
    </div>
  </div>;
};
export default Cart;
