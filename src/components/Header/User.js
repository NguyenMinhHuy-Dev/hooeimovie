import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import { useRef, useState } from 'react';

export const User = () => {
    const [drop, setDrop] = useState(false);

    const userRef = useRef(null);

    const handleUserClicked = () => {
        const user = userRef.current;
        if (drop) {
            user.classList.remove("active");
        }
        else {
            user.classList.add("active");
        }
        setDrop(!drop)
    }

    return (
        <div className="header-user">
            <img onClick={handleUserClicked} src='https://i.pinimg.com/originals/66/44/b3/6644b34c91f57f8d40a4eaa94e3cb797.png' className="user-avater" alt="avatar"/>
            {/* <ArrowDropDownIcon className='drop-icon'/> */}
            <ul ref={userRef} className='user-list'>
                <li className='user-list-item'> 
                    <AccountCircleTwoToneIcon className='user-icon'/>
                    My account
                </li>
                <div className='line'></div>
                <li className='user-list-item'>
                    <WatchLaterTwoToneIcon className='user-icon'/>
                    Watch later
                </li>
                <li className='user-list-item'>
                    <FavoriteTwoToneIcon className='user-icon'/>
                    Favourite list
                </li>
                <div className='line'></div>
                <li className='user-list-item'>
                    <SettingsTwoToneIcon className='user-icon'/>
                    Setting
                </li>
                <div className='line'></div>
                <li className='user-list-item'>
                    <MeetingRoomTwoToneIcon className='user-icon'/>
                    Sign out
                </li>
            </ul>
        </div>
    );
}