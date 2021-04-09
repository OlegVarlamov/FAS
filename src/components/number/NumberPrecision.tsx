import React from "react";

interface Props {
  value: number;
  precision: number;
  currency?: string;
  currencyPosition?: "start" | "end";
}

const NumberPrecision: React.FC<Props> = ({
  value,
  precision,
  currency,
  currencyPosition,
}: Props) => (
  <>
    {currencyPosition === "start" && currency} {value.toFixed(precision)}{" "}
    {currencyPosition === "end" && currency}
  </>
);

NumberPrecision.defaultProps = {
  currency: "",
  currencyPosition: "end",
};

export default NumberPrecision;
