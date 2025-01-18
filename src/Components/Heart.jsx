import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Heart = ({ heart, setHeart }) => {

    const changeHeart = (e) => {
        setHeart(<FaHeart />)
    }

    return (
        <>
            <button onClick={changeHeart}>{heart}</button>
        </>
    );
};

export default Heart;