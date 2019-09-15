import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "tabler-react";

import PricingTable from "./PricingTable";

export default ({ product, category, location }) => {
  const { image: uri, name: title, details } = product;
  const { name: categoryName } = category;
  const { desc, meta, pricingTable } = details && details[0];
  const { reservations, locations, currentReservation } = useSelector(
    state => state
  );
  const { selectedPriceOption } = currentReservation;
  const { selectedDuration } = currentReservation;

  if (!reservations || !locations) {
    return <div />;
  }

  const dispatch = useDispatch();
  const updateCurrentReservation = data => {};
  const resetCurrentReservation = () => {};
  const submitReservation = data => {};
  const reservation = reservations.find(r => r.productId === product.id);
  const descText = desc && desc.replace(/,/gi, "");

  useEffect(() => {
    resetCurrentReservation();
  }, [product]);

  return (
    <Card>
      <Card.Header style={{ flexDirection: "column" }}>
        <strong style={{ fontSize: 18 }}>{title}</strong>
        <span style={{ color: "#999", marginLeft: 5 }}>{categoryName}</span>
      </Card.Header>
      {selectedPriceOption && !reservation ? null : (
        <>
          <Card.Header>
            <img
              src={uri}
              style={{
                minHeight: 200,
                maxWidth: 400,
                width: "100%",
                margin: "auto",
                flex: 1
              }}
            />
          </Card.Header>
          <Card.Body>
            {meta.map((m, i) => (
              <strong style={{ color: "#333", paddingRight: 5 }} key={i}>
                {m}
              </strong>
            ))}

            <div style={{ color: "#333" }}>{descText}</div>
          </Card.Body>
        </>
      )}
      <Card.Body>
        <PricingTable
          data={pricingTable}
          selectedPriceOption={selectedPriceOption}
          selectPriceOption={selectedPriceOption =>
            updateCurrentReservation({
              selectedPriceOption,
              selectedDuration: selectedPriceOption.heading
            })
          }
          reservation={reservation}
          selectedDuration={selectedDuration}
        />
      </Card.Body>
    </Card>
  );
};
