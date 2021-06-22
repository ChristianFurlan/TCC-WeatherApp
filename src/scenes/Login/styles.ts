import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Fontisto';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const LogoBox = styled.View`
  align-items: center;
  margin: 20px;
`;

export const LogoText = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: -5px;
`;

export const InputText = styled.TextInput`
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 5px;
  color: white;
`;

export const LogInBox = styled.View`
  margin: 30px;
`;

export const InputLabel = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -5px;
  margin-top: 5px;
`;

export const InputBox = styled.View``;

export const Checkbox = styled(CheckBox)`
  margin-left: -5px;
`;

export const Text = styled.Text`
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  justify-content: space-between;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const TextCenter = styled(Text)`
  margin-top: 40px;
  align-self: center;
`;

export const LoginGoogle = styled(GoogleSigninButton).attrs({
  size: GoogleSigninButton.Size.Wide,
  color: GoogleSigninButton.Color.Light,
})`
  align-self: center;
  margin-top: 12px;
`;

export const LeftArrow = styled(Icon).attrs({
  name: 'arrow-left',
  size: 15,
  color: 'white',
})`
  margin: 20px;
`;
