import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { eventActions } from "../_actions/event.actions";

const EventDetail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const event = useSelector((state) => state.event);

    useEffect(() => {
        dispatch(eventActions.getEventDetails(id));
    }, [id]);

    return (
        <>
            <Link to="/">Back to Homepage</Link>
            {event &&
                !event.loading &&
                event.event &&
                Object.keys(event.event).length !== 0 && (
                    <div className="row-top">
                        <div className="col-1">
                            <img
                                className="large-image"
                                src={event.event.image_url[0]}
                                alt=""
                            />
                        </div>
                        <div className="col-2">
                            <h3>{event.event.venue}</h3>
                            <h5>{event.event.city}</h5>
                            <h4>{event.event.event_name}</h4>
                            <p>{event.event.category}</p>
                            <p>{event.event.description}</p>
                            <p>{event.event.event_start}</p>
                            <p>{event.event.event_end}</p>
                            <p>{event.event.event_address}</p>
                        </div>
                    </div>
                )}
        </>
    );
};

export default EventDetail;
