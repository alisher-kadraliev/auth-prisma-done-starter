import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { Button } from '../ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
const Social = () => {
    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <div className='flex items-center w-full gap-x-2'>
            <Button onClick={() => onClick('google')} className='w-full' size="lg" variant={'outline'} >
                <FcGoogle className='w-7 h-7' />
            </Button>
            <Button className='w-full' size="lg" variant={'outline'} >
                <FaFacebook className='w-7 h-7' />
            </Button>
        </div>
    )
}

export default Social