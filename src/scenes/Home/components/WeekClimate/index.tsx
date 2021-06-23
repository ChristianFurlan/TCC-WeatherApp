import React from 'react';
import {Container, Row, Temp, WeekDay, WeekItem} from './styles';
import Sun from '../../../../assets/svg/Sun';
import Cloudy from '../../../../assets/svg/Logo';
import Thundering from '../../../../assets/svg/Thundering';
import Rain from '../../../../assets/svg/Rain';
import SunRain from '../../../../assets/svg/SunRain';

type WeekClimateType = {
  weekDay: string;
  temp: number;
  icon: string;
};

const WeekClimate: React.FC = () => {
  const climateIcon = (climateStatus: string) => {
    if (climateStatus === 'sun') {
      return <Sun />;
    }
    if (climateStatus === 'cloudy') {
      return <Cloudy width={30} height={32} />;
    }
    if (climateStatus === 'thundering') {
      return <Thundering />;
    }
    if (climateStatus === 'rain') {
      return <Rain />;
    }
    if (climateStatus === 'sunRain') {
      return <SunRain />;
    }
    return <></>;
  };

  const WeekData: WeekClimateType[] = [
    {weekDay: 'Seg', temp: 25, icon: 'sun'},
    {weekDay: 'Ter', temp: 24, icon: 'sun'},
    {weekDay: 'Qua', temp: 23, icon: 'cloudy'},
    {weekDay: 'Qui', temp: 15, icon: 'thundering'},
    {weekDay: 'Sex', temp: 15, icon: 'rain'},
    {weekDay: 'Sab', temp: 21, icon: 'sunRain'},
    {weekDay: 'Dom', temp: 23, icon: 'cloudy'},
  ];

  return (
    <Container>
      <Row>
        {WeekData.map(({weekDay, temp, icon}) => (
          <WeekItem key={weekDay}>
            <WeekDay>{weekDay}</WeekDay>
            <Temp>{temp}º</Temp>
            {climateIcon(icon)}
          </WeekItem>
        ))}
      </Row>
    </Container>
  );
};

export default WeekClimate;
