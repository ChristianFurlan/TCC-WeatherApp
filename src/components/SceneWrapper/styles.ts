import IconLeft from 'react-native-vector-icons/Fontisto';
import IconDots from 'react-native-vector-icons/Entypo';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

export const ImageBox = styled.ImageBackground`
  display: flex;
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;

export const LeftArrow = styled(IconLeft).attrs({
  name: 'arrow-left',
  size: 15,
  color: 'white',
})`
  position: absolute;
  margin: 15px;
  left: 0;
`;

export const ThreeHorizontal = styled(IconDots).attrs({
  name: 'dots-three-horizontal',
  size: 25,
  color: 'white',
})`
  position: absolute;
  margin: 15px;
  right: 0;
`;

export const LogoBox = styled.View`
  align-items: center;
`;

export const LogoText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: -5px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
