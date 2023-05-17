import './Stars.css';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useEffect } from 'react';

export const Stars = ({rating}) => {  

    return ( 
        <div className="stars"> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            <StarBorderRoundedIcon className="star-icon"/> 
            {/* <StarHalfRoundedIcon className="star"/>
            <StarRoundedIcon className="star"/> */}
        </div>
    );
}