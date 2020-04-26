import React from "react";

export default function StockDatil(props) {
  const {name,total,stockEvents}=props;
    return (
    <>
      <h2>
        Prouduct {name}: | Total {total}:{" "}
      </h2>
      {stockEvents.map((event) => (
        <div
          style={{
            marginBottom: "80px",
            width: "350px",
            backgroundColor: "lightblue",
            border: "2px solid red",
          }}
        >
          <p>Id : {event.id}</p>
          <p>Type : {event.type}</p>
          <p>Quantity: {event.qty}</p>
          <p>proudact name: {event.proudct.name}</p>
        </div>
      ))}
    </>
  );
}
