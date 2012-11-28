module angular {
    interface InterpolateProvider {
        startSymbol(): string;
        startSymbol(value: string): InterpolateProvider;
        endSymbol(): string;
        endSymbol(value: string): InterpolateProvider;
    }

    interface InterpolateService {
        (text: string, mustHaveExpression: bool): (context) => string;
        startSymbol(): string;
        endSymbol(): string;
    }
}