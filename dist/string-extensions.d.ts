declare global {
    interface String {
        addQueryStringIfNeed(name: string, value: any | undefined | null): string;
    }
}
export {};
