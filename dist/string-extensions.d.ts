declare global {
    export interface String {
        addQueryStringIfNeed(name: string, value: any | undefined | null): string;
        addPagedQueryStringIfNeed(pageIndex?: number, pageSize?: number): string;
        toArray<T>(convert?: (element: string) => T): Array<T>;
    }
}
export default String;
