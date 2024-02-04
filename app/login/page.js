'use client'
import addData from '@/lib/addData';
import app from '@/lib/config';
import signin from '@/lib/signin';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React from "react";

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()
    const db=getFirestore(app);

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signin(email, password);

        if (error) {
            return console.log(error)
        }
        else{

            await addData();
            // else successful
            console.log(result)
            
            return router.push("/admin")
        }
    
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-60 mb-30">Sign In</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input className='text-black' onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input className='text-black' onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
            <button><a href='/signup'>Create an account</a></button>
        </div>

    </div>);
}

export default Login;