import {
  ICoord,
  IOpenWeatherModel,
  IOpenWeatherWeekModel,
} from './../utils/types/OpenWeatherTypes';
import {makeAutoObservable} from 'mobx';
import ClimateApi from '../api/climate/climate.api';

class ClimateStore {
  currentClimate: IOpenWeatherModel | null = null;
  weekClimate: IOpenWeatherWeekModel[] | null = null;

  constructor(private readonly climateApi: ClimateApi) {
    makeAutoObservable(this);
  }

  fetchCurrentClimate = async ({lat, lon}: ICoord): Promise<void> => {
    const currentClimate = await this.climateApi.fetchCurrentClimate({
      lat,
      lon,
    });

    this.currentClimate = currentClimate;
  };

  fetchWeekClimate = async ({lat, lon}: ICoord): Promise<void> => {
    const weekClimate = await this.climateApi.fetchWeekClimate({lat, lon});

    this.weekClimate = weekClimate;
  };
}

export default ClimateStore;
