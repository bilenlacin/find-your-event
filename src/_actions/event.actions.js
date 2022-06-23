import { eventConstants } from "../_constants";
import { eventService } from "../_services/event.service";

export const eventActions = {
    getAll,
    getEventDetails,
    filterByCategory,
    filterByCity,
    filterByVenue,
    filterByName,
    filterBySearch,
    filterByStartDate,
    filterByEndDate
};

function getAll() {
    return (dispatch) => {
        dispatch(request());
        dispatch(requestCategory());
        eventService
            .getAll()
            .then((res) => {
                dispatch(success(res.data));
                dispatch(successCategory(res.data));
            })
            .catch((err) => {
                dispatch(failure(err));
                dispatch(failureCategory(err));
            });
    };

    function request() {
        return {
            type: eventConstants.GETALL_EVENT_REQUEST
        };
    }
    function success(events) {
        return {
            type: eventConstants.GETALL_EVENT_SUCCESS,
            events
        };
    }

    function failure(error) {
        return {
            type: eventConstants.GETALL_EVENT_FAILURE,
            error
        };
    }

    function requestCategory() {
        return {
            type: eventConstants.GET_EVENT_CATEGORIES_REQUEST
        };
    }
    function successCategory(events) {
        return {
            type: eventConstants.GET_EVENT_CATEGORIES_SUCCESS,
            events
        };
    }

    function failureCategory(error) {
        return {
            type: eventConstants.GET_EVENT_CATEGORIES_FAILURE,
            error
        };
    }
}

function getEventDetails(id) {
    return (dispatch) => {
        dispatch(request());
        eventService
            .getDetails(id)
            .then((res) => dispatch(success(res.data)))
            .catch((err) => dispatch(failure(err)));
    };

    function request() {
        return {
            type: eventConstants.GET_EVENT_DETAILS_REQUEST
        };
    }
    function success(event) {
        return {
            type: eventConstants.GET_EVENT_DETAILS_SUCCESS,
            event
        };
    }

    function failure(error) {
        return {
            type: eventConstants.GET_EVENT_DETAILS_FAILURE,
            error
        };
    }
}

function filterByCategory(category) {
    return {
        type: eventConstants.FILTER_BY_CATEGORY,
        category
    };
}
function filterByCity(city) {
    return {
        type: eventConstants.FILTER_BY_CITY,
        city
    };
}

function filterByVenue(venue) {
    return {
        type: eventConstants.FILTER_BY_VENUE,
        venue
    };
}

function filterByName(eventName) {
    return {
        type: eventConstants.FILTER_BY_EVENT_NAME,
        eventName
    };
}

function filterBySearch(search) {
    return {
        type: eventConstants.FILTER_BY_SEARCH,
        search
    };
}

function filterByStartDate(startDate) {
    return {
        type: eventConstants.FILTER_BY_STARTDATE,
        startDate
    };
}

function filterByEndDate(endDate) {
    return {
        type: eventConstants.FILTER_BY_ENDDATE,
        endDate
    };
}
