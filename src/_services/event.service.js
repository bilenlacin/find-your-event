import axios from "axios";

const baseUrl = "http://localhost:3004/";

export const eventService = {
    getAll,
    getDetails
};

function getAll() {
    return new Promise((resolve, reject) => {
        axios
            .get(baseUrl + "events")
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function getDetails(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        axios
            .get(baseUrl + `events/${id}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
