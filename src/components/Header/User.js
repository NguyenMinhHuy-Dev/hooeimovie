import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import { useRef, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useStore } from '../../stored';

export const User = ({ user }) => {
    const [drop, setDrop] = useState(false);
    const { setUser } = useStore((state) => state);

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

    const handleClickSignOut = () => {
        signOut(auth);
        setUser(null);
    }

    return (
        <div className="header-user">
            <img onClick={handleUserClicked} src={user.photoURL || 'https://f10-zpcloud.zdn.vn/94722087477964222/7895e56b0b48d7168e59.jpg'} className="user-avater" alt="avatar"/>
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
                <li className='user-list-item' onClick={handleClickSignOut}>
                    <MeetingRoomTwoToneIcon className='user-icon'/>
                    Sign out
                </li>
            </ul>
        </div>
    );
}