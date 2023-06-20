import { Button, FormControl, FormLabel ,Input} from '@chakra-ui/react';

import React from 'react';

const Login = () => {
    return (
        <div>
             
            <FormControl  isRequired>
  <FormLabel>Your email</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setEmail(e.target.value)} />
</FormControl>
            <FormControl  isRequired>
  <FormLabel>Enter password</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setPassword(e.target.value)} />
</FormControl>
       
<Button className='w-full' colorScheme='blue'>login</Button>
        </div>
    );
};

export default Login;