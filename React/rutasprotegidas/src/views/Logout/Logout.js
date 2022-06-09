import {useEffect} from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Logout(){

    const {logout} = useAuthContext();

    useEffect(() => logout());

    return null;
}