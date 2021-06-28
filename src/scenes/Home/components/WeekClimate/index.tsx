import React from 'react';
import {Container, Row, Temp, WeekDay, WeekItem, ClimateIcon} from './styles';

import {IOpenWeatherWeekModel} from '../../../../utils/types/OpenWeatherTypes';
import {
  firstLetterToUpperCase,
  formatDate,
} from '../../../../utils/helpersFunctions';
type Props = {
  climateWeekData: IOpenWeatherWeekModel[] | null;
};

const WeekClimate: React.FC<Props> = ({climateWeekData}) => {
  const climateIcon = (iconName: string) => {
    return `http://openweathermap.org/img/wn/${iconName}@2x.png`;
  };

  const dtToWeekDay = (dt: number): string => {
    const newDate = new Date(dt * 1000);
    return firstLetterToUpperCase(formatDate(newDate, 'E'));
  };

  return (
    <Container>
      <Row>
        {climateWeekData &&
          climateWeekData?.map(item => (
            <WeekItem key={item.dt}>
              <WeekDay>{dtToWeekDay(item.dt)}</WeekDay>
              <Temp>{Math.trunc(item.temp.day)}º</Temp>
              <ClimateIcon source={{uri: climateIcon(item.weather[0].icon)}} />
            </WeekItem>
          ))}
      </Row>
    </Container>
  );
};

export default WeekClimate;
