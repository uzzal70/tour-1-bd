import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () =>
{
    const [user, setUser] = useState({});
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const auth = getAuth();
    const googleProvier = new GoogleAuthProvider();

    // User login email and password 
    const userLogin = (email, password) =>
    {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                const user = userCredential.user;
                console.log(user);
                return user;
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    // User Registretion
    const registerUsingEmail = (email, password) =>
    {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                const user = userCredential.user;
                console.log(user);
                return user;
            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    const signInUsingGoogle = () =>
    {
        return signInWithPopup(auth, googleProvier)
    }

    const logOut = () =>
    {
        signOut(auth)
            .then(() =>
            {
                setUser({});
            })
    }
    // ovserve user chanege or not
    useEffect(() =>
    {
        onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        registerUsingEmail,
        userLogin,
        logOut
    }

}
export default useFirebase;
