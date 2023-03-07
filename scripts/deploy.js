async function main() {
  const ModifyVariable = await hre.ethers.getContractFactory("ModifyVariable");
  const modifyVariable = await ModifyVariable.deploy(77, "jimmy");

  await modifyVariable.deployed();

  console.log(`address:  ${modifyVariable.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
