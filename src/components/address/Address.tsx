import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { useAppSelector } from "app/hooks";
import NumberPrecision from "components/number/NumberPrecision";

const StyledAddressContainer = styled.div`
  display: flex;
  max-width: 100%;
  padding: 20px;
  margin: 20px;
  background: rgba(228, 228, 228, 0.26);

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledAddressBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 0 40px;

  @media (max-width: 400px) {
    padding-left: 0;
    row-gap: 20px;
  }
`;
const StyledSmall = styled.small`
  color: #a3a3a9;
  font-size: 12px;
`;
const StyledText = styled.div`
  font-weight: 400;
  font-size: 16px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
`;
const Address: React.FC = () => {
  const { order } = useAppSelector((state) => state.order);

  return (
    <StyledAddressContainer>
      <div>
        {order && (
          <QRCode
            value={`bitcoin:${order.address}?amount=${order.amount_in}`}
            size={128}
          />
        )}
      </div>

      <StyledAddressBlock>
        <div>
          <StyledSmall>Address</StyledSmall>
          <StyledText>{order?.address}</StyledText>
        </div>
        <div>
          <StyledSmall>Amount</StyledSmall>
          <StyledText>
            {order && (
              <NumberPrecision
                value={order.amount_in}
                precision={order.precision_in}
                currency={order.currency_in}
              />
            )}
          </StyledText>
        </div>
      </StyledAddressBlock>
    </StyledAddressContainer>
  );
};

export default Address;
