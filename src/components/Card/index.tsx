import React from 'react';
import {IOpenWeatherModel} from '../../utils/types/OpenWeatherTypes';
import Loading from '../Loading';
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

type Props = {
  date: string;
  climateData: IOpenWeatherModel | null;
  loading?: boolean;
};

const Card: React.FC<Props> = ({climateData, date, loading}) => {
  return (
    <CardBox>
      <Container source={img}>
        {loading && <Loading />}
        {climateData && !loading && (
          <>
            <Title>{climateData.name}</Title>
            <Text>{date}</Text>
            <ClimateText>{Math.trunc(climateData.main.temp)}º</ClimateText>

            <FooterBox>
              <Row>
                <Text>Min: {Math.trunc(climateData.main.temp_min)}º</Text>
                <Text>Max: {Math.trunc(climateData.main.temp_max)}º</Text>
              </Row>
              <Text>
                Sensação Térmica: {Math.trunc(climateData.main.feels_like)}º
              </Text>
            </FooterBox>
          </>
        )}
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
