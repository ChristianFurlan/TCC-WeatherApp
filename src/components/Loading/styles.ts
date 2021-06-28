import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: 'white',
})``;
