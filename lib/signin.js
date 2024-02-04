import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export default async function signin(email,password){
    let result=null,error=null;
    try{
        result=await signInWithEmailAndPassword(auth,email,password);
    }
    catch(err){
        error=err;
        console.log(err);
    }
    return {result,error};
}