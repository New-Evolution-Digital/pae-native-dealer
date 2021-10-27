import * as React from 'react';
import { Box, Input, Center, Button, Link, Heading } from 'native-base';

const Login: any = ({ navigation }) => {
  return (
    <Box>
      <Center mt='150'>
        <Heading>Please Log in</Heading>
        <Input
          m='3'
          placeholder='Email'
          width={'80%'}
          variant={'filled'}
          size='lg'
        />
        <Input
          type={'password'}
          m='3'
          placeholder='Password'
          width={'80%'}
          variant={'filled'}
          size='lg'
        />
        <Button
          size={'lg'}
          m={'5'}
          px={5}
          variant='outline'
          onPress={() => navigation.navigate('Profile')}
          width={'80%'}>
          Submit
        </Button>
        <Link mt={'4'} href=''>
          Forgot Password
        </Link>
      </Center>
    </Box>
  );
};

export default Login;
