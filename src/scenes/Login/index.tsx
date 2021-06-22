import React, {useState} from 'react';
import {
  LogoBox,
  InputText,
  LogInBox,
  InputLabel,
  InputBox,
  LogoText,
  Row,
  Checkbox,
  Text,
  CheckboxContainer,
  RegisterButton,
  LoginGoogle,
  TextCenter,
  LeftArrow,
} from './styles';
import Logo from '../../assets/svg/Logo';
import Button from '../../components/Button';
import SceneWrapper from '../../components/SceneWrapper';
import {useNavigation} from '@react-navigation/core';

type Props = {
  register: boolean;
};

const Login: React.FC<Props> = ({register}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const toggleRemember = () => setRemember(!remember);
  const navigation = useNavigation();

  return (
    <SceneWrapper>
      {register && <LeftArrow onPress={() => navigation.navigate('Login')} />}
      <LogoBox>
        <Logo />
        <LogoText>Weather</LogoText>
      </LogoBox>
      <LogInBox>
        {register && (
          <InputBox>
            <InputLabel>Name</InputLabel>
            <InputText value={name} onChangeText={e => setName(e)} />
          </InputBox>
        )}
        <InputBox>
          <InputLabel>E-mail</InputLabel>
          <InputText value={email} onChangeText={e => setEmail(e)} />
        </InputBox>
        <InputBox>
          <InputLabel>Password</InputLabel>
          <InputText value={password} onChangeText={e => setPassword(e)} />
        </InputBox>
        <Button>Log in</Button>
        <Row>
          <CheckboxContainer onPress={toggleRemember}>
            <>
              <Checkbox
                tintColors={{true: '#FFF', false: '#FFF'}}
                value={remember}
                onChange={toggleRemember}
              />
              <Text>Lembrar-me?</Text>
            </>
          </CheckboxContainer>
          {!register && (
            <>
              <RegisterButton onPress={() => navigation.navigate('Register')}>
                <Text>Registrar-se</Text>
              </RegisterButton>
            </>
          )}
        </Row>
        <TextCenter>Ou logar com</TextCenter>
        <LoginGoogle onPress={() => {}} />
      </LogInBox>
    </SceneWrapper>
  );
};

export default Login;
