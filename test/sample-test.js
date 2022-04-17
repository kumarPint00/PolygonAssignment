const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Assignment", function () {
  it("Should return the new NFT once it's changed", async function () {
    const Assignment = await ethers.getContractFactory("Assignments");
    const assignment = await Assignment.deploy("Assignments polygon", "AP","https://gateway.pinata.cloud/ipfs/QmRhjviVyPnWACaQfTjGffWDALU2ueF3awBVaGJ8g7HYP5");
    await assignment.deployed();

    expect(await assignment.name()).to.equal("Assignments polygon");

    expect(await assignment._baseURI()).to.equal("https://gateway.pinata.cloud/ipfs/QmRhjviVyPnWACaQfTjGffWDALU2ueF3awBVaGJ8g7HYP5")
  });
});
