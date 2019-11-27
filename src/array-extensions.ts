/**数组扩展接口 */
interface Array<T> {
  /**转换为SQL字符串，格式如下 A1,A2,A3... */
  toArrayString(): string;
}

Array.prototype.toArrayString = function(): string {
  let result = "";
  this.forEach(element => {
    result += `${element},`;
  });
  return result.substring(0, result.length - 1);
};
