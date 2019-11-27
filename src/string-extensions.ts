import URL = require("url-parse");
declare global {
  /**字符串扩展接口 */
  export interface String {
    addQueryStringIfNeed(name: string, value: any | undefined | null): string;
    addPagedQueryStringIfNeed(pageIndex?: number, pageSize?: number): string;
    toArray<T>(convert?: (element: string) => T): Array<T>;
  }
}
String.prototype.addQueryStringIfNeed = function(
  name: string,
  value: any | undefined | null
): string {
  if (value === undefined || value === null) {
    return `${this}`;
  } else {
    var queryString = new URL(`${this}`).query;
    if (typeof queryString === "string" && queryString !== "") {
      return `${this}&${name}=${value}`;
    } else if (typeof queryString === "string" && queryString === "") {
      return `${this}?${name}=${value}`;
    } else {
      return `${this}?${name}=${value}`;
    }
  }
};
String.prototype.addPagedQueryStringIfNeed = function(
  pageIndex?: number,
  pageSize?: number
) {
  if (
    typeof pageIndex === "number" &&
    pageIndex > 0 &&
    typeof pageSize === "number" &&
    pageSize > 0
  ) {
    var queryString = new URL(`${this}`).query;
    if (typeof queryString === "string" && queryString !== "") {
      return `${this}&PageIndex=${pageIndex}&PageSize=${pageSize}`;
    } else {
      return `${this}?PageIndex=${pageIndex}&PageSize=${pageSize}`;
    }
  }
  return `${this}`;
};

String.prototype.toArray = function<T>(
  convert?: (element: string) => T
): Array<T> {
  if (convert === undefined) {
    return this.split(",");
  } else {
    return this.split(",").map(ele => convert(ele) as T);
  }
};
export default String;
//Object.defineProperty(String.prototype, "addQueryStringIfNeed", {
//  value(name: string, value: any | undefined | null): string {
//}});
