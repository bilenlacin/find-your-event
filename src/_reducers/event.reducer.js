import { eventConstants } from "../_constants";

export function eventReducer(state = { events: [] }, action) {
    switch (action.type) {
        case eventConstants.GETALL_EVENT_REQUEST:
            return {
                loading: true
            };
        case eventConstants.GETALL_EVENT_SUCCESS:
            return {
                loading: false,
                events: action.events
            };
        case eventConstants.GETALL_EVENT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}
