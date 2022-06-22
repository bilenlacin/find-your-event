import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../_actions/event.actions";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Home = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);
    console.log(events);

    let images = [];
    let event_images =
        events &&
        !events.loading &&
        events.events &&
        events.events.length > 0 &&
        events.events.map(
            (event) =>
                event.image_url.length > 0 && images.push(event.image_url[0])
        );

    useEffect(() => {
        dispatch(eventActions.getAll());
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {images.length > 0 &&
                            images.map((image) => (
                                <SwiperSlide>
                                    <img alt="event" src={image} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
