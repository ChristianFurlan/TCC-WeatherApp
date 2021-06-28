import React, {useState} from 'react';
import SceneWrapper from '../../components/SceneWrapper';
import Card from '../../components/Card';
import {CardsBox, Container} from './styles';
import WeekClimate from './components/WeekClimate';
import geolocation from '@react-native-community/geolocation';
import {
  ICoord,
  IOpenWeatherModel,
  IOpenWeatherWeekModel,
} from '../../utils/types/OpenWeatherTypes';
import callApi from '../../services/api';
import {HttpMethod} from '../../utils/Enums';
import {formatDate} from '../../utils/helpersFunctions';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {useStores} from '../../stores';
import {observer} from 'mobx-react-lite';

const Home: React.FC = () => {
  let currentDate: Date;
  let formatedDate: string;

  const [loading, setLoading] = useState(false);
  const [climateData, setClimateData] = useState<IOpenWeatherModel | null>(
    null,
  );

  const [climateWeekData, setClimateWeekData] = useState<
    IOpenWeatherWeekModel[] | null
  >(null);
  const {climate} = useStores();
  const [date, setDate] = useState('');

  const getLocaleAndClimate = useCallback(() => {
    geolocation.getCurrentPosition(info => {
      const coordsObj: ICoord = {
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      };

      findCoordinates(coordsObj);
      getClimateWeekData(coordsObj);
      getHour();
    });
  }, []);

  const getHour = () => {
    currentDate = new Date();
    formatedDate = formatDate(currentDate, 'iii. PPP');
    // let splitDate = formatedDate.split(' ');
    // formatedDate = splitDate.map(firstLetterToUpperCase).join(' ');

    setDate(formatedDate);
  };

  const findCoordinates = async ({lat, lon}: ICoord) => {
    try {
      setLoading(true);
      await climate.fetchCurrentClimate({lat, lon});
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };

  const getClimateWeekData = async ({lat, lon}: ICoord) => {
    try {
      setLoading(true);
      await climate.fetchWeekClimate({lat, lon});
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
          <Card
            date={date}
            climateData={climate.currentClimate}
            loading={loading}
          />
        </CardsBox>
      </Container>
      <WeekClimate climateWeekData={climate.weekClimate} />
    </SceneWrapper>
  );
};

export default observer(Home);
