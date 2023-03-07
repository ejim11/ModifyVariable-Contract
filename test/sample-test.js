const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("modifyVariable contract", () => {
  it("should modify the value of x", async () => {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const modifyVariable = await ModifyVariable.deploy(77, "jimmy");
    await modifyVariable.deployed();

    await modifyVariable.modifyToLeet();

    const newX = await modifyVariable.x();

    assert.equal(newX.toNumber(), 1339, "didn't modify variable");
  });

  it("should modify the value of name", async () => {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const modifyVariable = await ModifyVariable.deploy(77, "jimmy");
    await modifyVariable.deployed();

    await modifyVariable.modifyName("Frank");

    const newName = await modifyVariable.name();
    assert.equal(newName.toString(), "Frank", "didn't modify variable");
  });
});
