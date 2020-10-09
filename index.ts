import { ethers } from "ethers";
import R from "ramda";
import yVaultAbi from "./abi/yVault.json";
import yCurveAbi from "./abi/yCurve.json";

const yVaultAddress = "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c";
const yUSDDecimals = 18;

const yCurveAddress = "0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3";

export const uintToFixed = (decimals: number) =>
  R.pipe(
    (uintStr: string) => Number.parseInt(uintStr, 10),
    (num) => num / 10 ** decimals
  );

const main = async () => {
  let provider = ethers.getDefaultProvider("homestead", {
    etherscan: "XRZNZRYTP6RESXXUVI1J7KWE9PCU8Y7Q9M",
    infura: "c013ca7b78dc4452bd268c05a2f727cf",
  });
  const yVault = new ethers.Contract(yVaultAddress, yVaultAbi, provider);
  const yUSDToYRCVBigNumber = await yVault.getPricePerFullShare();
  const yUSDToYCRV = ethers.FixedNumber.fromValue(
    yUSDToYRCVBigNumber,
    yUSDDecimals
  );
  console.log(yUSDToYCRV);

  // get curve rates
  const yCurve = new ethers.Contract(yCurveAddress, yCurveAbi, provider);
};

main().catch((err) => {
  throw err;
});
