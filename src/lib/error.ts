export class CustomError extends Error {
    constructor(message: string) {
        super("[" + process.cwd() + "]: " + message);

    }
}

