export function showErrorDialog(message) {
    return {
        type: "SHOW_ERROR_DIALOG",
        payload: message
    };
}

export function hideErrorDialog() {
    return {
        type: "HIDE_ERROR_DIALOG",
        payload: ""
    };
}

