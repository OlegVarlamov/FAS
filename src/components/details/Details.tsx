import React from "react";
import styled from "styled-components";
import { useAppSelector } from "app/hooks";
import NumberPrecision from "components/number/NumberPrecision";
import moment from "moment";
import RefundButton from "components/refundButton/RefundButton";

const StyledDetailsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 30px 0;
  border-top: 1px solid #e4e4e4;
`;
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  padding: 0 20px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;
const StyledSmall = styled.small`
  color: #a3a3a9;
  font-size: 12px;
`;

const Details: React.FC = () => {
  const { order } = useAppSelector((state) => state.order);

  return (
    <StyledDetailsContainer>
      <DetailsGrid>
        <StyledSmall>ID</StyledSmall>
        <div>{order?.id}</div>
        <StyledSmall>Date</StyledSmall>
        <div>{order && moment.unix(order.created_at).format("DD.MM.YYYY")}</div>
        <StyledSmall>Amount in</StyledSmall>
        <div>
          {order && (
            <NumberPrecision
              value={order.amount_in}
              precision={order.precision_in}
              currency={order.currency_in}
            />
          )}
        </div>
        <StyledSmall>Amount out</StyledSmall>
        <div>
          {order && (
            <NumberPrecision
              value={order.amount_in}
              precision={order.precision_out}
              currency={order.currency_out}
              currencyPosition="start"
            />
          )}
        </div>
        <StyledSmall>Conversion rate</StyledSmall>
        <div>
          {order && `1 ${order.currency_in} = `}
          {order && (
            <NumberPrecision
              value={order.rate}
              precision={order.rate_precision}
              currency={order.currency_out}
              currencyPosition="start"
            />
          )}
        </div>
      </DetailsGrid>

      {order && <RefundButton isVisible={order.can_refund} />}
    </StyledDetailsContainer>
  );
};

export default Details;
