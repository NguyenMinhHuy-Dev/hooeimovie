import './SignIn.css'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { useStore } from '../../../stored'

export const SignIn = () => { 
    const { setSignIn, signin } = useStore((state) => state);

    const handleClickSQuit = () => {
        setSignIn(false); 
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
            </div>
        </div>
    )
}