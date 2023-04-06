import './SignIn.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'; 
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useStore } from '../../../stored'
import { SignUp } from './SignUp';

export const SignIn = () => { 
    const { setSignIn, signin } = useStore((state) => state);

    const handleClickSQuit = () => {
        setSignIn(false); 
    }

    const handleClickSignUp = (e) => {
        document.getElementById("form-left").classList.remove("active");
        document.getElementById("form-right").classList.add("active");
    }

    return (
        <div className="login-layer" > 
            <div className='login-form'>
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
                            <input type='email' className='input' placeholder='Enter your email'/>
                        </div>
                        <div className='inputs-group'>
                            <input type='password' className='input' placeholder='Enter your password'/>
                        </div>
                        <span className='error-span'>Invalid email or password!</span>
                        <span className='signin sign'>Sign in</span>
                        <span className='label-span signup-span' onClick={handleClickSignUp}>Sign up </span>
                        <span className='form-heading sub'>or</span>
                        <div className='other-signin gg'>
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
            </div>
        </div>
    )
}