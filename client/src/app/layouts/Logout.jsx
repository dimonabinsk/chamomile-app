import { useEffect } from "react";
import { useDispatch } from "react-redux"

import { SpinnerLoader } from "../components/ui/spinnerLoader";
import { logOut } from "../store/users";



const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
    }, [dispatch]);
    return <SpinnerLoader />;
};


export default LogOut;