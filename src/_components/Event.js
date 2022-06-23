import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Event = ({ event }) => {
    return (
        <div className="cart-item">
            <Link to={`/events/${event.id}`}>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {event.image_url.length > 0 &&
                        event.image_url.map((image) => (
                            <SwiperSlide>
                                <img className="medium" src={image} alt="" />
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="card-body">
                    <h4>{event.event_name}</h4>
                    <p className="description">{event.event_venue}</p>
                </div>
            </Link>
        </div>
    );
};

export default Event;
