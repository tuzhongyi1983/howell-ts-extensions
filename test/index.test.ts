import "../dist";
test("String.AddQueryStringIfNeed", async () => {
  const base = new String("http://192.168.21.244:9000/Villages");
  let s = base.addQueryStringIfNeed("name", "value");
  expect(s).toBe("http://192.168.21.244:9000/Villages?name=value");
  let s2 = s.addQueryStringIfNeed("age", 23);
  expect(s2).toBe("http://192.168.21.244:9000/Villages?name=value&age=23");
  let s3 = s2.addQueryStringIfNeed("unage", null);
  expect(s3).toBe("http://192.168.21.244:9000/Villages?name=value&age=23");
});

test("String.ToArray", async () => {
  const base = "1,3,4,5,7";
  var numbers: number[] = base.toArray<number>(x => parseInt(x));
  var strings: string[] = base.toArray();
  expect(numbers.toString()).toBe(base);
  expect(strings.toString()).toBe(base);
});
test("String.AddPagedQueryStringIfNeed", async () => {
  const base = "http://192.168.21.244:9000/Villages";
  let s = base.addPagedQueryStringIfNeed(1, 2);
  expect(s).toBe("http://192.168.21.244:9000/Villages?PageIndex=1&PageSize=2");
  let s2 = base.addPagedQueryStringIfNeed(1, undefined);
  expect(s2).toBe(base);
  let s3 = base.addPagedQueryStringIfNeed(0, 0);
  expect(s3).toBe(base);
});
