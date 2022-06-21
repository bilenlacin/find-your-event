import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { eventActions } from "../_actions/event.actions";

const Home = () => {
    const dispatch = useDispatch();
    console.log("home çalıştı");
    useEffect(() => {
        dispatch(eventActions.getAll());
    }, []);

    return <div>Home</div>;
};

export default Home;
