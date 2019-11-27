import "../src/array-extensions";
test("Array.ToSqlString", async () => {
  var sites = ["Google", "Runoob", "Taobao"];
  var sqlString = sites.toArrayString();
  expect(sqlString).toBe("Google,Runoob,Taobao");
  var sites_array: string[] = ["Google", "Runoob", "Taobao"];
  sqlString = sites_array.toArrayString();
  expect(sqlString).toBe("Google,Runoob,Taobao");
  var number_array: number[] = [1421, 6632, 12409];
  var sq = number_array[0].toString(16);
  sqlString = number_array.toArrayString();
  expect(sqlString).toBe("1421,6632,12409");
});
