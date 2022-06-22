import React, { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
    const events = useSelector((state) => state.events);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    let event_categories =
        events &&
        !events.loading &&
        events.events &&
        events.events.length > 0 &&
        events.events.map((event) => event.category);
    let uniq_category = event_categories && [...new Set(event_categories)];

    let event_venues =
        events &&
        !events.loading &&
        events.events &&
        events.events.length > 0 &&
        events.events.map((event) => event.event_venue);
    let uniq_venues = event_venues && [...new Set(event_venues)];

    let event_cities =
        events &&
        !events.loading &&
        events.events &&
        events.events.length > 0 &&
        events.events.map((event) => event.city);
    let uniq_cities = event_cities && [...new Set(event_cities)];

    let event_names =
        events &&
        !events.loading &&
        events.events &&
        events.events.length > 0 &&
        events.events.map((event) => event.event_name);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/*CATEGORIES */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Select Category
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                {uniq_category &&
                                    uniq_category.map((category, i) => (
                                        <li key={i}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {category}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                        {/*VENUES */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Select Venue
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                {uniq_venues &&
                                    uniq_venues.map((venue, i) => (
                                        <li key={i}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {venue}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                        {/*CITIES */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Select City
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                {uniq_cities &&
                                    uniq_cities.map((city, i) => (
                                        <li key={i}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {city}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                        {/*NAME */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Select Event
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                {event_names &&
                                    event_names.map((name, i) => (
                                        <li key={i}>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="">
                            <a className="" href="#">
                                Start Date
                                <DatePicker
                                    className="me-1"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </a>
                        </div>
                        <div className="">
                            <a className="" href="#">
                                End Date
                                <DatePicker
                                    className="ms-1"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />{" "}
                            </a>
                        </div>
                    </div>

                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Event"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
