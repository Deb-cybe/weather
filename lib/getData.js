import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const getData=async()=>{
    let result=null,error=null;
    try{
        const docs=await getDocs(collection(db,"users"));
        docs.forEach((doc)=>{
            console.log(doc.data().name);
        })
    }
    catch(err){
        console.log(err);
    }
}
export default getData;