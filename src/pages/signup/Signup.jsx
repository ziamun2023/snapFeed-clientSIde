import { FormControl, FormLabel ,Input,Button} from '@chakra-ui/react';

import React, { useState } from 'react';

const Signup = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirm,setConfirm]=useState()
    const [pic,setPic]=useState()

    const postPhoto=(pics)=>{

    }
    return (
        <div>
            <FormControl  isRequired>
  <FormLabel>Enter Your name</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setName(e.target.value)} />
</FormControl>
            <FormControl  isRequired>
  <FormLabel>Your email</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setEmail(e.target.value)} />
</FormControl>
            <FormControl  isRequired>
  <FormLabel>Enter password</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setPassword(e.target.value)} />
</FormControl>
            <FormControl  isRequired>
  <FormLabel>Confirm password</FormLabel>
  <Input placeholder='Enter Your name '  onChange={(e)=>setConfirm(e.target.value)} />
</FormControl>
            <FormControl  isRequired>
  <FormLabel>Upload profile photo</FormLabel>
  <Input type='file' accept='image/*' onChange={(e)=>postPhoto(e.target.files[0])} />
</FormControl>
<Button className='w-full' colorScheme='blue'>Button</Button>

        </div>
    );
};

export default Signup;