'use client'
import addData from '@/lib/addData';
import signup from '@/lib/signup';
import { useRouter } from 'next/navigation';
import React from "react";

function Signup() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name,setName]=React.useState('');
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signup(email, password,name);

        if (error) {
            return console.log(error)
        }
        else{
            // else successful
            console.log(result)
            const res=await addData(name);
        }
        return router.push("/admin")
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-60 mb-30">Sign up</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor='name'>
                    <p>Name</p>
                    <input className='text-black' onChange={(e) => setName(e.target.value)} required type="text" name="name" id="name" placeholder="example name" />
                </label>
                <label htmlFor="email">
                    <p>Email</p>
                    <input className='text-black' onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input className='text-black' onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>);
}

export default Signup;