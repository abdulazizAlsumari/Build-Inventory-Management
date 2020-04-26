import React from "react";
import StockDatil from "./StockDatil";

export default function StockEventsTable(props) {
  const { proudcts, stockEvents } = props;
  //
  return (
    <div style={{ WebkitPaddingStart: "50%" }}>
      {proudcts.map((proudct) => {
        const { id } = proudct;
        const releventStockEvents = stockEvents.filter(
          (se) => se.proudct.id === proudct.id
        );
        const stockTotal = releventStockEvents.reduce(
          (accumulator, currentElement) => {
            return accumulator + currentElement.qty;
          },
          0
        );
        return (
          <div>
            <StockDatil
              name={proudct.name}
              total={stockTotal}
              stockEvents={releventStockEvents}
            />
          </div>
        );
      })}
    </div>
  );
}
