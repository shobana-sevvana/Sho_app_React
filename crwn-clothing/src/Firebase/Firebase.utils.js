import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useRef } from 'react';

    const firebaseConfig = {
        apiKey: "AIzaSyB3xIO2bgiIPGA_yTXRm5TlRA8t_eCm3Jc",
        authDomain: "crwn-clothing-db-90420.firebaseapp.com",
        projectId: "crwn-clothing-db-90420",
        storageBucket: "crwn-clothing-db-90420.appspot.com",
        messagingSenderId: "658963119421",
        appId: "1:658963119421:web:29fb381a85d7fe9b999954",
        measurementId: "G-JBN8MCCPZ9"
      };

      export const createUserProfileDoc = async (userAuth,additionalData) => {

        if(!userAuth)
            return;
            const  userRef =firestore.doc(`Crwn-clothing/${userAuth.uid}`) 
            
            const snapShot =await userRef.get();
            
          if(!snapShot.exists)
          {
const {displayname,email}=userAuth;
const createdAt =new Date();

try {
   
    await userRef.set({
displayname,
email,
createdAt,
...additionalData

    });

}catch (error){

    console.log('error creating user', error.message);
}
    }
    return userRef;

      };
   
firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
