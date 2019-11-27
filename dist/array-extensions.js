"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.toArrayString = function () {
    let result = "";
    this.forEach(element => {
        result += `${element},`;
    });
    return result.substring(0, result.length - 1);
};
//# sourceMappingURL=array-extensions.js.map