import { eventConstants } from "../_constants";
import { eventService } from "../_services/event.service";

export const eventActions = {
    getAll
};

function getAll() {
    return (dispatch) => {
        dispatch(request());
        eventService
            .getAll()
            .then((res) => dispatch(success(res.data)))
            .catch((err) => dispatch(failure(err)));
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
}
