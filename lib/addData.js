import { Timestamp, addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

const addData=async(name)=>{ 
    let result=null,error=null; 
    const checkDoc=await checkData(name); 
    try{
        const timestamp=Timestamp.fromDate(new Date());
        if(checkDoc){
            console.log("user already exists");
            return {result,error};
        }
        result=await addDoc(collection(db,"users"),{
            name:name,
            createdAt:timestamp
        })
        console.log("User added");
    } 
    catch(err){
        error=err;
        console.log(err);
    }
    return {result,error};
}
const checkData = async (name) => {
    try {
      const q = query(collection(db, 'users'),where("name","==",name));
      const querySnapshot = await getDocs(q);
        console.log(querySnapshot.empty)//false means exists, true means not exists
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking document existence:', error);
      return false;
    }
  };
export default addData;


