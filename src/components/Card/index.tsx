import React from 'react';
import {
  Container,
  Title,
  Text,
  ClimateText,
  FooterBox,
  Row,
  AddButton,
  AddButtonText,
  ButtonBox,
  CardBox,
} from './styles';

const img = require('../../assets/images/beach.png');

const Card: React.FC = () => {
  return (
    <CardBox>
      <Container source={img}>
        <Title>São Paulo</Title>
        <Text>Seg. 31 de maio. 2021</Text>
        <ClimateText>26º</ClimateText>

        <FooterBox>
          <Row>
            <Text>Min: 26º</Text>
            <Text>Max: 26º</Text>
          </Row>
          <Text>Sensação Térmica: 26º</Text>
        </FooterBox>
      </Container>
      <ButtonBox>
        <AddButton>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </ButtonBox>
    </CardBox>
  );
};

export default Card;
