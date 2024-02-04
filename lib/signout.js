import { signOut } from "firebase/auth";
import { auth } from "./config";

export default async function signout(){
    let result=null;
    let error=null;
    try{
        result=await signOut(auth);
        console.log(result);
    }
    catch(err){
        error=err;
        console.log(err);
    }
    return {result,error};
}