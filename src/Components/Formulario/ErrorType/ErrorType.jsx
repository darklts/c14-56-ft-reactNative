const ErrorType = (errorType) => {
    switch (errorType) {
        case "required":
            return "This field is required";
        case "minLength":
            return "Too short, minimum length is 7 characters";
        case "maxLength":
            return "Too long, maximum length is 15 characters";
        default:
            return "An error occurred";
    }
}

export default ErrorType