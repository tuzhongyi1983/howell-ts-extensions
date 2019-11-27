"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URL = require("url-parse");
String.prototype.addQueryStringIfNeed = function (name, value) {
    if (value === undefined || value === null) {
        return `${this}`;
    }
    else {
        var queryString = new URL(`${this}`).query;
        if (typeof queryString === "string" && queryString !== "") {
            return `${this}&${name}=${value}`;
        }
        else if (typeof queryString === "string" && queryString === "") {
            return `${this}?${name}=${value}`;
        }
        else {
            return `${this}?${name}=${value}`;
        }
    }
};
String.prototype.toArray = function (convert) {
    if (convert === undefined) {
        return this.split(",");
    }
    else {
        return this.split(",").map(ele => convert(ele));
    }
};
//# sourceMappingURL=string-extensions.js.map