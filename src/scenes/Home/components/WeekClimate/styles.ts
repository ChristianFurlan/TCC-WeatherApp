import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 15px;
  margin: 0px 20px;
  margin-top: 20px;
`;

const BaseText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Row = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const WeekDay = styled(BaseText)`
  color: #54baf3;
`;

export const Temp = styled(BaseText)`
  color: white;
`;

export const WeekItem = styled.View`
  align-items: center;
  margin: 0 5px;
`;
