import React, {createContext, useContext} from 'react';
import ClimateApi from '../api/climate/climate.api';
import ClimateStore from './climate.store';

type StoreContext = {
  climate: ClimateStore;
};

const StoresContext = createContext<StoreContext>({} as StoreContext);

export const StoreProvider: React.FC = ({children}) => {
  const store = {
    climate: new ClimateStore(new ClimateApi()),
  };
  return (
    <StoresContext.Provider value={store}>{children}</StoresContext.Provider>
  );
};

export const useStores = (): StoreContext => {
  return useContext(StoresContext);
};
