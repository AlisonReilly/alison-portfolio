import { collection, getDocs } from "firebase/firestore";

// import { db } from '../firebase';
import { useState } from 'react';
import { db } from "..";
 
//    const [projectDetails, setProjectDetails] = useState([]);
 
    export const getProjectDetails = async (projectDetails, setProjectDetails) => {
       
        await getDocs(collection(db, 'projectDetails'))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setProjectDetails(newData);                
            })
       
    }
   
    // useEffect(()=>{
    //     getProjectDetails();
    // }, [])