import styled from 'styled-components/native';

const BaseText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const Container = styled.ImageBackground`
  width: 284px;
  height: 431px;
  border-radius: 34px;
  align-items: center;
`;

export const Title = styled(BaseText)`
  font-size: 34px;
  margin-top: 35px;
`;

export const Text = styled(BaseText)``;

export const ClimateText = styled(Text)`
  font-size: 64px;
`;

export const FooterBox = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: 76%;
  margin-bottom: 35px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddButton = styled.TouchableOpacity`
  align-self: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: white;
  align-items: center;
  justify-content: center;
`;

export const AddButtonText = styled.Text`
  font-size: 30px;
`;

export const ButtonBox = styled.View`
  margin-top: -30px;
`;

export const CardBox = styled.View``;
