import React, {useState} from 'react';
import SceneWrapper from '../../components/SceneWrapper';
import Card from '../../components/Card';
import {CardsBox, Container} from './styles';
import WeekClimate from './components/WeekClimate';
import geolocation from '@react-native-community/geolocation';
import {ICoord, IOpenWeatherModel} from '../../utils/types/OpenWeatherTypes';
import callApi from '../../services/api';
import {HttpMethod} from '../../utils/Enums';
import {formatDate} from '../../utils/helpersFunctions';
import {useEffect} from 'react';
import {useCallback} from 'react';

const Home: React.FC = () => {
  let currentDate: Date;
  let formatedDate: string;

  const [loading, setLoading] = useState(false);
  const [climateData, setClimateData] = useState<IOpenWeatherModel | null>(
    null,
  );

  const getLocaleAndClimate = useCallback(() => {
    geolocation.getCurrentPosition(info => {
      const coordsObj: ICoord = {
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      };

      findCoordinates(coordsObj);
      getHour();
    });
  }, []);

  const getHour = () => {
    currentDate = new Date();
    formatedDate = formatDate(currentDate, 'iiii, dd  MMMM');
  };

  const findCoordinates = async ({lat, lon}: ICoord) => {
    try {
      setLoading(true);
      const response = await callApi<IOpenWeatherModel>(
        '/onecall',
        HttpMethod.get,
        {
          lat,
          lon,
          units: 'metric',
          lang: 'pt-br',
          exclude: 'minutely, hourly, alerts',
        },
      );

      console.log(response.data);

      console.log(formatDate(currentDate, 'iiii'));

      console.log('dt:', response.data.current.dt);
      const testDt = new Date(response.data.current.dt * 1000).toDateString();

      console.log(testDt);

      setClimateData(response.data);
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocaleAndClimate();
  }, [getLocaleAndClimate]);

  return (
    <SceneWrapper logo dots>
      <Container>
        <CardsBox horizontal>
          <Card />
        </CardsBox>
      </Container>
      <WeekClimate />
    </SceneWrapper>
  );
};

export default Home;
