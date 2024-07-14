import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";

import { Button } from '../ui/button'
const Social = () => {
    return (
        <div className='flex items-center w-full gap-x-2'>
            <Button className='w-full' size="lg" variant={'outline'} >
                <FcGoogle className='w-7 h-7' />
            </Button>
            <Button className='w-full' size="lg" variant={'outline'} >
                <FaFacebook className='w-7 h-7' />
            </Button>
        </div>
    )
}

export default Social