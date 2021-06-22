import React from 'react';
import {Container, ImageBox} from './styles';
const imageBg = require('../../assets/bgTempo.png');

type Props = {
  children: Element;
};

const SceneWrapper: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <ImageBox source={imageBg}>{children}</ImageBox>
    </Container>
  );
};

export default SceneWrapper;
