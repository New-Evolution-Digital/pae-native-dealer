import { Box, Button, Input, Heading, Center } from 'native-base';
import * as React from 'react';

const Onboarding = ({ navigation }) => {
  return (
    <Box>
      <Center m={'50'}>
        <Heading size={'sm'}>Welcome to your onboarding </Heading>
        <Input
          m='3'
          placeholder='Full Name'
          width={'80%'}
          variant={'filled'}
          size='lg'
        />
        <Input
          m='3'
          placeholder='Phone Number'
          width={'80%'}
          variant={'filled'}
          size='lg'
        />
        <Input
          m='3'
          placeholder='Email'
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
          onPress={() => navigation.navigate('Profile')}>
          {
            //TODO: Add onPress to redirect to SalesView (which will have inventory list & CRM)
          }
          Submit
        </Button>
      </Center>
    </Box>
  );
};
export default Onboarding;
