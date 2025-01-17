import React, { useState } from "react";
import Mainheader from "../components/header";
import Foot from "../components/Footer";
import { useCart } from "../components/cartcontext";

const Checkout = () => {
  const { cart, removeProduct, increaseQuantity, decreaseQuantity } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);

  const shippingFee = 3000;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
  };

  const handleOkayClick = () => {
    setOrderSuccess(false);
  };

  return (
    <div>
      <Mainheader />
      <div className="flex justify-center mt-10">
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1044px] h-auto lg:h-[827px] mb-40 space-y-0 lg:space-y-0 lg:space-x-0">
          {/* Left container */}
          <div className="w-full lg:w-[672px] h-auto lg:h-[827px] bg-amber-100 rounded-[10px] p-6">
            <h2 className="text-neutral-900 text-4xl font-normal font-Quicksand pt-7">
              Shopping Cart
            </h2>
            {/* Shopping cart items */}
            <div className="container mx-auto p-6">
              {cart.length === 0 ? (
                <p className="text-neutral-900 text-base font-normal font-Quicksand mb-2">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center  rounded-lg shadow-sm mb-4 pb-2"
                  >
                    <div className="w-1/4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="w-1/2 px-4">
                      <h3 className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                        {product.name}
                      </h3>
                      <p className="text-neutral-900 text-base font-normal font-Quicksand mb-2">
                        {product.note}
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="quantity-button w-[31.33px] h-7 p-2.5 bg-green-900 rounded-tl rounded-bl flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-neutral-50 text-xl font-semibold font-Quicksand"
                        >
                          -
                        </button>
                        <span className="w-[31.33px] h-7 p-2.5 bg-neutral-50 flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-black opacity-60 text-[19px] font-semibold font-Quicksand">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="quantity-button w-[31.33px] h-7 p-2.5 bg-green-900 rounded-tr rounded-br flex-col justify-center items-center gap-2.5 inline-flex self-stretch text-center text-neutral-50 text-xl font-semibold font-Quicksand"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/4 text-right">
                      <p className="text-neutral-900 text-xl font-medium font-Playfair Display mb-2">
                        ₦{product.price.toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="text-gray-500 text-xl font-normal font-Quicksand"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Order Summary */}
            <h2 className="w-[278px] text-neutral-900 text-3xl font-normal font-Quicksand mt-5">
              Order Summary
            </h2>
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="w-[101px] text-neutral-900 opacity-95 text-xl font-normal font-Playfair Display py-3">
                    Subtotal:
                  </td>
                  <td className="py-2 text-right text-neutral-900 opacity-95 text-2xl font-normal font-Playfair Display">
                    ₦{subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className=" w-[101px] text-neutral-900 opacity-95 text-xl font-normal font-Playfair Display py-3">
                    Shipping Fee:
                  </td>
                  <td className="py-2 text-right  text-neutral-900 opacity-95 text-2xl font-normal font-Playfair Display">
                    ₦{shippingFee.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="w-[101px] text-neutral-900 opacity-95 text-xl font-normal font-Playfair Display py-3">
                    Total:
                  </td>
                  <td className="py-2 text-right  text-neutral-900 opacity-95 text-2xl font-normal font-Playfair Display">
                    ₦{total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right container */}
          <div className="w-full lg:w-[672px] h-auto lg:h-[827px] bg-amber-100 rounded-[10px] border-t lg:border-t-0 lg:border-l border-neutral-900 p-6">
            <h2 className="text-neutral-900 text-[32px] font-normal font-Quicksand leading-[105px]">
              Shipping Information
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Email:          johndoe@gmail.com"
                />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Address:    Apt no, Street"
                />
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent mb-4 md:mb-0"
                    placeholder="City:"
                  />
                  <input
                    type="text"
                    className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                    placeholder="Country:"
                  />
                </div>
              </div>
            </form>

            <h2 className="text-neutral-900 text-[30px] font-normal font-Quicksand leading-[105px]">
              Payment Information
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="number"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="Card number:    XXXX  XXXX  XXXX  XXXX"
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent mb-4 md:mb-0"
                  placeholder="Expiry date: MM/YY"
                />
                <input
                  type="number"
                  className="w-full h-[59px] rounded-lg border border-green-900 pl-5 bg-transparent"
                  placeholder="CVV: XXX"
                />
              </div>
            </form>

            <div className="flex justify-center mt-8">
              <button
                className="w-full py-3 bg-green-900 text-neutral-50 text-xl font-semibold rounded-lg font-Quicksand"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {orderSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center pt-5">
            <h2 className="text-neutral-900 text-5xl font-medium font-Quicksand leading-[105px]">
              Success
            </h2>
            <p className="mb-6 w-[523px] text-center text-neutral-900 text-xl font-normal font-Quicksand leading-[31px]">
              Your payment was successful and your order will be delivered in
              the next few days.
            </p>
            <button
              className="py-4 px-4 text-neutral-50 text-xl font-semibold font-Quicksand w-[297px] h-[70px] p-2.5 bg-green-900 rounded-lg justify-center items-center gap-2.5 inline-flex"
              onClick={handleOkayClick}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <Foot />
    </div>
  );
};

export default Checkout;
