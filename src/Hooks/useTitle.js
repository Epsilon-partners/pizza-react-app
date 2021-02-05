import { useEffect } from "react";

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `Goa Food`
          : `[${orders.length}] élement(s) dans votre panier ! `;
    }
  });
}
