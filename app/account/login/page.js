"use client"

import { POST } from '../../api/auth/login/route.js';
import { useFormState } from 'react-dom'
import Form from "@components/Form";
import Submit from "@components/Submit";
import TextField from "@components/TextField";
import Image from "next/image";
import cardSide from "@public/assets/images/rosemary.jpg";
import "@styles/globals.css";

const LogIn = () => {

    const [state, formAction ] = useFormState(POST, null);

    return (
        <>
            <div className="flex 
                    m-auto sm:w-3/4 sm:h-3/4 w-full h-screen
                    rounded-lg drop-shadow-xl
                    bg-gray-100">
                <div className="flex-col
                    sm:mx-20 sm:mb-20 sm:mt-auto m-auto
                    space-y-3
                    w-2/3">
                    <h1 className="font-black
                        text-5xl text-right">
                        Welcome!
                    </h1>
                    <p className="text-right text-gray-400 italic">
                        In order to proceed to, you must first log in
                    </p>
                    <h2 className="font-bold text-xl">Log In</h2>
                    <Form action={formAction}
                        method={"POST"}>
                        <TextField floatingText={"Username"} type={"text"} autocomplete={"username"}/>
                        <TextField floatingText={"Password"} type={"password"} autocomplete={"current-password"}/>
                        <Submit action={"Login"} />
                    </Form>
                </div>
                <Image className=" lg:block 
                    w-1/3 hidden rounded-r-lg
                    object-none"
                    priority="false"
                    alt="login image"
                    src={cardSide} />
            </div>
        </>
    );
};

export default LogIn;
