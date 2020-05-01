import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  onPress(): void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
