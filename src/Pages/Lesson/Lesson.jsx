import React from 'react';
import AppleImg  from "../../Assets/Imgs/download.jpeg"
import Button from '../../Components/Button/Button';
import ButtonMui from '@mui/material/Button';
import ClippedDrawer from '../../Components/SidebarMui/SidebarMui';
import { useDispatch, useSelector } from 'react-redux/es/exports';
const Lesson = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleTodo = (e) => {
        if(e.keyCode == 13) {
            dispatch({type: "ADD", todo: e.target.value})
        }
    }

    return (
        <div>
            <input type="text" onKeyUp={handleTodo} />

            {
                state ? state.map((item, index) => {
                    return <h1 key={index}>{item}</h1>
                }) : ""
            }
        </div>
    );
}

export default Lesson;
