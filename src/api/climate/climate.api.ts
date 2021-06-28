import {
  ICoord,
  IOpenWeatherWeekModel,
} from './../../utils/types/OpenWeatherTypes';
import callApi from '../../services/api';
import {HttpMethod} from '../../utils/Enums';
import {IOpenWeatherModel} from '../../utils/types/OpenWeatherTypes';

export default class ClimateApi {
  fetchCurrentClimate = async ({lat, lon}: ICoord) => {
    const data = await callApi<IOpenWeatherModel>('/weather', HttpMethod.get, {
      lat,
      lon,
      units: 'metric',
      lang: 'pt_br',
    });

    return data.data;
  };

  fetchWeekClimate = async ({
    lat,
    lon,
  }: ICoord): Promise<IOpenWeatherWeekModel[]> => {
    const data = await callApi<IOpenWeatherWeekModel[]>(
      '/onecall',
      HttpMethod.get,
      {
        lat,
        lon,
        units: 'metric',
        lang: 'pt_br',
        exclude: 'minutely,hourly,alerts,current',
      },
    );

    data.data.daily.shift();

    return data.data.daily;
  };
}
