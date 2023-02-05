const fs = require('fs');
const registerContract = JSON.parse(fs.readFileSync('../build/contracts/Register.json', 'utf8'));
const Election = artifacts.require("./Election.sol");
const theQuestion = "what is superior?"
const candidateNames = ["Chocolate", "Vanilla"];
//const registrationContractAddress = registerContract.networks[5].address;
console.log(registerContract.networks);
const registrationContractAddress = registerContract.networks[5777].address;
const startElectionTime = 1675431565;
const endElectionTime = 1775431565;

module.exports = function(deployer) {
  deployer.deploy(
    Election,
    theQuestion,
    candidateNames,
    registrationContractAddress,
    startElectionTime,
    endElectionTime
    );
};

