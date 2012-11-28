module angular {
    interface ExceptionHandler {
        (exception: Error, cause: string);
    }
}