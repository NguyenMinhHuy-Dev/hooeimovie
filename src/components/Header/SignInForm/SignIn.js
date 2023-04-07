import './SignIn.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'; 
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useStore } from '../../../stored'
import { SignUp } from './SignUp';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../config/firebase';
import { Loading } from '../../Loading/Loading';
import { addUser } from '../../../actions/firebaseActions';

export const SignIn = () => { 
    const { setUser, setSignIn, setLoading, loading } = useStore((state) => state);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClickSQuit = () => {
        setSignIn(false); 
    }

    const handleClickSignUp = (e) => {
        document.getElementById("form-left").classList.remove("active");
        document.getElementById("form-right").classList.add("active");
    }

    const handleClickButtonSignIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            setSignIn(false);
        })
        .catch((err => {
            setError(err.message);
        }));
    }

    const handleLogin = async (Provider) => {
        setLoading(true); 
        try {
            const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
            const { displayName, email, photoURL, uid } = user;
            if (_tokenResponse.isNewUser) {
                await addUser({ displayName, email, photoURL, uid });
            }
            setLoading(false);
            setSignIn(false);
        }
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <div className="login-layer" > 
            <div className='login-form'>
                
                {loading ? <Loading /> : (
                    <>
                        <div className='login-form-header'>
                            <CancelPresentationOutlinedIcon 
                                className='icon-quit' 
                                onClick={handleClickSQuit}
                            />
                        </div>
                        <div className='form-container'> 
                            <div id='form-left' className='form-left active' >
                                <span className='form-heading'>SIGN IN</span>
                                <div className='inputs-group'>
                                    <input type='email' disabled={loading} className='input' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email'/>
                                </div>
                                <div className='inputs-group'>
                                    <input type='password' disabled={loading} className='input' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter your password'/>
                                </div>
                                <span className='error-span'>{error}</span>
                                <span className='signin sign' onClick={handleClickButtonSignIn}>Sign in</span>
                                <span className='label-span signup-span' onClick={handleClickSignUp}>Sign up </span>
                                <span className='form-heading sub'>or</span>
                                <div className='other-signin gg' onClick={() => {handleLogin(googleProvider)}}>
                                    <span>Sign in with Google</span>
                                    <GoogleIcon className='google'/>
                                </div>
                                <div className='other-signin fb'>
                                    <span>Sign in with Facebook</span>
                                    <FacebookIcon className='facebook'/>
                                </div>
                            </div>  
                            <div id='form-right' className='form-right'>
                                <SignUp />
                            </div>  
                        </div> 
                    </>
                )}
            </div>
        </div>
    )
}