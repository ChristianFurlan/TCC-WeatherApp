import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  ImageBox,
  LeftArrow,
  ScrollView,
  LogoBox,
  LogoText,
  Row,
  ThreeHorizontal,
} from './styles';

const imageBg = require('../../assets/images/bgTempo.png');

import Logo from '../../assets/svg/Logo';

type Props = {
  children: Element;
  backButton?: boolean;
  logo?: boolean;
  dots?: boolean;
};

const SceneWrapper: React.FC<Props> = ({children, backButton, logo, dots}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageBox source={imageBg}>
        <ScrollView>
          <Row>
            {backButton && (
              <LeftArrow onPress={() => navigation.navigate('Login')} />
            )}

            {logo && (
              <LogoBox>
                <Logo width={44} height={40} />
                <LogoText>Weather</LogoText>
              </LogoBox>
            )}
            {dots && <ThreeHorizontal />}
          </Row>
          {children}
        </ScrollView>
      </ImageBox>
    </Container>
  );
};

export default SceneWrapper;
