import URL = require("url-parse");
import "../src/string-extensions";
test("String.AddQueryStringIfNeed", async () => {
  const base = new String("http://192.168.21.244:9000/Villages");
  //const base = "howell/ver10/data_service/village_system/Villages";
  "howell/ver10/data_service/village_system/Villages"
    .addQueryStringIfNeed("name", "value")
    .addQueryStringIfNeed("name", null);
  let s = base.addQueryStringIfNeed("name", "value");
  expect(s).toBe("http://192.168.21.244:9000/Villages?name=value");
  let s2 = s.addQueryStringIfNeed("age", 23);
  expect(s2).toBe("http://192.168.21.244:9000/Villages?name=value&age=23");
  let s3 = s2.addQueryStringIfNeed("unage", null);
  expect(s3).toBe("http://192.168.21.244:9000/Villages?name=value&age=23");
});
