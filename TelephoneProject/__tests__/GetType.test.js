"use strict";

const PhoneRegister = require("../PhoneRegister");
const phones = require("../phones.json");

describe("get types", () => {
  test("default jsonData", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes()).toEqual(["home", "work", "mobile"]);
    //expect(phoneRegister.getTypes().sort()).toEqual(["home", "work", "mobile"]);
  });
});
