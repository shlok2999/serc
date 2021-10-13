import { ENDPOINTS } from "../constants/endpoints"

export const publicationServices = {
    fetchConferences,
    fetchAuthorPubs
}

function fetchConferences() {
    const requestOptions = {
        method: 'GET',
    }

    return fetch(ENDPOINTS.CONFERENCE_PUBLICATIONS_API, requestOptions).then(handleResponse)
}

function fetchAuthorPubs(url) {
    const requestOptions = {
        method: 'GET',
    }
    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data;
    });
}