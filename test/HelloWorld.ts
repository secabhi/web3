import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", () => {
  it("should say hi", async () => {
    // setup
    //deploy
    //call our function test

    const helloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await helloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello, World");
  });
});
