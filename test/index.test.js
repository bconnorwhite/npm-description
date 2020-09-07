const { getDescription, getDescriptions } = require('../build/index.js');

test("getDescription", () => {
  getDescription("chalk").then((result) => {
    expect(result).toBe("Terminal string styling done right");
  });
});

test("getDescriptions", () => {
  getDescriptions(["chalk", "commander"]).then((result) => {
    expect(result["chalk"]).toBe("Terminal string styling done right");
    expect(result["commander"]).toBe("the complete solution for node.js command-line programs");
  });
});
