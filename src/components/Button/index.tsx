import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Container, Text} from './styles';
type Props = {
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
};
const Button: React.FC<Props> = ({children, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
