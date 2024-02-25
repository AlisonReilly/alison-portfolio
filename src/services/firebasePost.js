import { collection, addDoc } from "firebase/firestore";
import { db } from "..";
   
    export const addProject = async (data) => {    
        try {
            const docRef = await addDoc(collection(db, "projectDetails"), {
              data,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

