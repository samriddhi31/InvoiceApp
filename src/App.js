import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import InvoiceCard from './Components/InvoiceCard/InvoiceCard';
import Button from './Components/Button/Button';

const invoices = [
  { id: 10, date: "Mar 02, 2023", amount: 100.0, dueInDays: 4, status: "Saved", description: "Loreum Ipsum" },
  { id: 11, date: "Mar 03, 2023", amount: 150.0, dueInDays: 5, status: "Saved", description: "Loreum Ipsum" },
  { id: 12, date: "Mar 04, 2023", amount: 200.0, dueInDays: 6, status: "Saved", description: "Loreum Ipsum" },
];

function App() {
  return (
    <Container>
      <Header />
      <Content>
      <AmountRaisedContainer>
        <AmountCard1>
          <Title>Amount Raised</Title>
          <Amount>₹10,000</Amount>
        </AmountCard1>
        <AmountCard>
          <Title>Amount Paid</Title>
          <Amount>₹5,000</Amount>
        </AmountCard>
      </AmountRaisedContainer>
      <Section>
        <SectionHeader>
          <SectionTitle>Recent</SectionTitle>
          <ViewAll>View all</ViewAll>
        </SectionHeader>
        <CardList>
          {invoices.map(invoice => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
        </CardList>
      </Section>
      <Button>Create new invoice</Button>
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f4f8;
  min-height: 100vh;
  position: relative;
  padding-top: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const AmountRaisedContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  border-radius: 10px; 
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: -40px 10px 20px 0px;
`;
const AmountCard1 = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #bfd8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AmountCard = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Section = styled.div`
  margin: 20px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ViewAll = styled.div`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
`;

const CardList = styled.div`
  margin-top: 10px;
`;



