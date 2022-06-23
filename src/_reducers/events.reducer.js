import { eventConstants } from "../_constants";

export function eventsReducer(
    state = {
        events: [],
        startDate: "",
        endDate: "",
        search: "",
        category: "",
        city: "",
        venue: "",
        eventName: ""
    },
    action
) {
    switch (action.type) {
        case eventConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case eventConstants.GETALL_SUCCESS:
            return {
                loading: false,
                events: action.events
            };
        case eventConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case eventConstants.FILTER_BY_CATEGORY:
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.category === action.category
                    )
                ]
            };
        case eventConstants.FILTER_BY_CITY:
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.city === action.city
                    )
                ]
            };
        case eventConstants.FILTER_BY_VENUE:
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.event_venue === action.venue
                    )
                ]
            };
        case eventConstants.FILTER_BY_EVENT_NAME:
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.event_name === action.eventName
                    )
                ]
            };
        case eventConstants.FILTER_BY_STARTDATE:
            console.log(action.startDate);
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.event_date >= action.startDate
                    )
                ]
            };

        case eventConstants.FILTER_BY_ENDDATE:
            return {
                events: [
                    ...state.events.filter(
                        (event) => event.event_date <= action.endDate
                    )
                ]
            };
        case eventConstants.FILTER_BY_SEARCH:
            return {
                events: [
                    ...state.events.filter((event) =>
                        event.description
                            .toLowerCase()
                            .includes(action.search.toLowerCase())
                    )
                ]
            };

        default:
            return state;
    }
}
