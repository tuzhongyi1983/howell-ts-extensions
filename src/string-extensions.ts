import URL = require("url-parse");

declare global {
  /**字符串扩展接口 */
  interface String {
    addQueryStringIfNeed(name: string, value: any | undefined | null): string;
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

String.prototype.toArray = function<T>(
  convert?: (element: string) => T
): Array<T> {
  if (convert === undefined) {
    return this.split(",");
  } else {
    return this.split(",").map(ele => convert(ele) as T);
  }
};

//Object.defineProperty(String.prototype, "addQueryStringIfNeed", {
//  value(name: string, value: any | undefined | null): string {
//}});
