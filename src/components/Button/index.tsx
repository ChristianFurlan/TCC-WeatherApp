import React from 'react';
import {Container, Text} from './styles';
type Props = {
  children: string;
};
const Button: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
