import { eventConstants } from "../_constants";

export function categoryReducer(
    state = {
        events: []
    },
    action
) {
    switch (action.type) {
        case eventConstants.GET_EVENT_CATEGORIES_REQUEST:
            return {
                loading: true
            };
        case eventConstants.GET_EVENT_CATEGORIES_SUCCESS:
            return {
                loading: false,
                events: action.events
            };
        case eventConstants.GET_EVENT_CATEGORIES_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}
