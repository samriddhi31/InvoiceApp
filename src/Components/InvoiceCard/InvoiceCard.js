import React from 'react';
import styled from 'styled-components';

const InvoiceCard = ({ invoice }) => (
  <Card>
    <InvoiceInfo>
      <InvoiceNumber>No. #{invoice.id}</InvoiceNumber>
      <Date>{invoice.date}</Date>
      <Status>{invoice.status}</Status>
    </InvoiceInfo>
    <AmountDue>
      <Description>{invoice.description}</Description>
      <Amount>₹{invoice.amount}</Amount>
      <Due>Due in {invoice.dueInDays} days</Due>
    </AmountDue>
  </Card>
);

export default InvoiceCard;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InvoiceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvoiceNumber = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  color: #999;
`;

const Date = styled.div`
  color: #999;
  margin: 5px 0;
`;

const Status = styled.div`
  background-color: #e0e0e0;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 50px;
`;

const AmountDue = styled.div`
  text-align: right;
`;

const Amount = styled.div`
  font-weight: bold;
  color: #333;
`;

const Due = styled.div`
  color: #999;
`;
