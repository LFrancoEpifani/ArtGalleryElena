/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_API_KEY);

export default function Cart({ setIsOpen }) {
  const { items, clearCart } = useCart();

  const { t } = useTranslation("common");

  const lineItems = items.map((item) => ({
    price_id: item.price_id,
    quantity: 1,
  }));

  const handleCheckout = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;

    const response = await fetch(import.meta.env.VITE_API_STRIPE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };
  

  return (
    <div className="fixed right-5 top-5 w-72 bg-white p-5 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-0 right-0 p-1 text-2xl"
      >
        <Icon icon="ei:close-o" />
      </button>
      <ul>
        {items.map((item) => (
         
          <li key={item.id} className="flex mb-4 items-center">
             {console.log(item)}
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 mr-4 rounded"
            />
            <div>
              <strong>{item.name}</strong> - {item.price}€<br />
              <small className="text-gray-500">{t("quantity")}: {item.quantity}</small>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-b border-gray-400">
        Total:{" "}
        {items.reduce((acc, item) => acc + item.price, 0)}€
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleCheckout}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-3 rounded focus:outline-none focus:shadow-outline"
        >
          {t("purchase")}
        </button>

        <button
          onClick={clearCart}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded focus:outline-none focus:shadow-outline"
        >
          <Icon icon="bi:cart-x" />
        </button>
      </div>
    </div>
  );
}
