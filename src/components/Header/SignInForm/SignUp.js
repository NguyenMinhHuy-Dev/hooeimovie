import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { useStore } from '../../../stored';

export const SignUp = () => { 
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { setUser, setSignIn, signin, user } = useStore((state) => state);

    const handleClickSignIn = (e) => {
        document.getElementById("form-left").classList.add("active");
        document.getElementById("form-right").classList.remove("active");
    }

    const handleClickButtonSignUp = async () => {
        if (confirmPassword !== password) {
            await setError("Passwords are not the same!"); 
        }
        else { 
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setSignIn(false);
            })
            .catch((err => {
                setError(err.message);
            }));
        }
    }

    return (
        <>
            <span className='form-heading'>SIGN UP</span>
            <div className='inputs-group'>
                <input type='email' className='input' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email'/>
            </div>
            <div className='inputs-group'>
                <input type='password' className='input' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Create your password'/>
            </div>
            <div className='inputs-group'>
                <input type='password' className='input' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder='Confirm your password'/>
            </div>
            <span className='error-span'>{error}</span> 
            <span className='label-span signup-span' onClick={handleClickSignIn}> Sign in </span>
            <span className='signin sign' onClick={handleClickButtonSignUp}>Sign up</span>
        </>
    )
}