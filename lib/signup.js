import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./config";

export default async function signup(email,password,name){
    let result=null;
    let error=null;
    try{
        result=await createUserWithEmailAndPassword(auth,email,password); 
        await updateProfile(result.user,{
            displayName:name
        })
        console.log(result);
    }
    catch(err){
        error=err;
        console.log(err);
    }
    return {result,error};
}