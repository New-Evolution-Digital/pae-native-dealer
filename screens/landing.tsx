import * as React from 'react';
import { View } from 'react-native';
import { Heading, Button, Input, Text, Image, Center } from 'native-base';

const LandingPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        size={350}
        source={require('../assets/brand.png')}
        alt='Brand Logo'
      />
      <Heading>Welcome, Please Login</Heading>
      <Button
        size={'lg'}
        m={'5'}
        px={5}
        width={'80%'}
        variant='outline'
        onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Text>If you are new enter your Authentication Code</Text>
      <Input
        mx='3'
        placeholder='Authentication Code'
        width={'80%'}
        variant={'filled'}
        size='lg'
      />
      <Button
        size={'lg'}
        m={'5'}
        px={5}
        variant='outline'
        width={'80%'}
        onPress={() => navigation.navigate('Onboarding')}>
        Submit
      </Button>
    </View>
  );
};

export default LandingPage;
