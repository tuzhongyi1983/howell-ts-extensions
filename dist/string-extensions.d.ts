declare global {
    export interface String {
        addQueryStringIfNeed(name: string, value: any | undefined | null): string;
        toArray<T>(convert?: (element: string) => T): Array<T>;
    }
}
export {};
