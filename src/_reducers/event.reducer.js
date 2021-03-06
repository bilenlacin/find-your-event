import { eventConstants } from "../_constants";

export function eventReducer(state = { event: null }, action) {
    switch (action.type) {
        case eventConstants.GET_EVENT_DETAILS_REQUEST:
            return {
                loading: true
            };
        case eventConstants.GET_EVENT_DETAILS_SUCCESS:
            return {
                loading: false,
                event: action.event
            };
        case eventConstants.GET_EVENT_DETAILS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}
