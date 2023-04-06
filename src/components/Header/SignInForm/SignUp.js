import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const SignUp = () => { 
    const handleClickSignIn = (e) => {
        document.getElementById("form-left").classList.add("active");
        document.getElementById("form-right").classList.remove("active");
    }

    return (
        <>
            <span className='form-heading'>SIGN UP</span>
            <div className='inputs-group'>
                <input type='email' className='input' placeholder='Enter your email'/>
            </div>
            <div className='inputs-group'>
                <input type='password' className='input' placeholder='Create your password'/>
            </div>
            <div className='inputs-group'>
                <input type='password' className='input' placeholder='Confirm your password'/>
            </div>
            <span className='error-span'>Invalid email or password!</span>
            <span className='label-span signup-span' onClick={handleClickSignIn}> Sign in </span>
            <span className='signin sign'>Sign up</span>
        </>
    )
}