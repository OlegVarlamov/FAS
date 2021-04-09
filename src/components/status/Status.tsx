import React from "react";
import styled from "styled-components";
import { useAppSelector } from "app/hooks";
import { OrderStatuses } from "features/receiveStatus/models";
import Spinner from "components/spinner/Spinner";

const StyledStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;

  @media (max-width: 400px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
const StyledStatus = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSmall = styled.small`
  color: #a3a3a9;
  font-size: 12px;
`;
const StyledTitle = styled.div`
  color: #0c9241;
  font-size: 24px;
  font-weight: 600;
`;
const StyledLink = styled.a`
  color: #a3a3a9;
  font-size: 12px;
`;

const Status: React.FC = () => {
  const { order, isLoading } = useAppSelector((state) => state.order);

  return (
    <StyledStatusContainer>
      <StyledStatus>
        <StyledSmall>Status</StyledSmall>
        <StyledTitle>{order && OrderStatuses[order.status]}</StyledTitle>
      </StyledStatus>

      <StyledStatus>
        <StyledSmall>
          Confirmations
          <StyledLink
            target="_blank"
            href={`https://www.blockchain.com/ru/btc-testnet/address/${order?.address}`}
          >
            (View in Blockchain)
          </StyledLink>
        </StyledSmall>
        <StyledTitle>
          {order?.confirmations_have} {isLoading && <Spinner />}
        </StyledTitle>
      </StyledStatus>
    </StyledStatusContainer>
  );
};

export default Status;
