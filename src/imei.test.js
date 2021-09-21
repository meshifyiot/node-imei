var imei = require("./imei");

describe("imei validity", () => {
    it("should return true for valid imei", () => {
        const IMEI = new imei();
        expect(IMEI.isValid("860921035123120")).toBe(true);
    });
    it("should return false for invalid imei", () => {
        const IMEI = new imei();
        expect(IMEI.isValid("860921035123121")).toBe(false);
    });
});

describe("generating imei", () => {
    it("should generate a valid pre-determined imei", () => {
        const IMEI = new imei();
        const appleIMEI = IMEI.device("Apple", "iPhone");
        expect(appleIMEI.substr(0, 8)).toBe("01154600");
    });

    it("should generate a valid sercomm imei", () => {
        const IMEI = new imei();

        const sercommIMEIA = IMEI.device("Sercomm", "LeakFreezeA");
        expect(sercommIMEIA.substr(0, 8)).toBe("35165210");

        const sercommIMEIB = IMEI.device("Sercomm", "LeakFreezeB");
        expect(sercommIMEIB.substr(0, 8)).toBe("35667710");
    });

    it("should generate a valid random imei", () => {
        const IMEI = new imei();
        const randomIMEI = IMEI.random();
        expect(IMEI.isValid(randomIMEI)).toBe(true);
    });
});
