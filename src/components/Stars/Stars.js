import './Stars.css';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useEffect, useState } from 'react';

export const Stars = ({rating}) => {   

    return ( 
        <div className="stars">  
            {rating === 0 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 1 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 1 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 2 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 2 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 3 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 3 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 4 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 4 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 5 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 5 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 6 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 6 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 7 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 7 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 8 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 8 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 9 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 

            {rating <= 9 ? (
                <StarBorderRoundedIcon className="star-icon"/> 
            ) : ((rating < 10 ? (
                <StarHalfRoundedIcon className="star-icon"/>
            ) : (
                <StarRoundedIcon className="star-icon"/> 
            )))} 
            <span>({rating} / 10)</span>
        </div>
    );
}