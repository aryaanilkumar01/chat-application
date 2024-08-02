import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from '../redux/userSlice';
import { BASE_URL } from '..';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                // const res = await axios.get(`http://localhost:8080/api/v1/user/`);
                const res = await axios.get(`${BASE_URL}/api/v1/user/`);
                // store
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])
}
export default useGetOtherUsers