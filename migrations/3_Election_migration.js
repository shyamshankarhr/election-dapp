const fs = require('fs');
const registerContract = JSON.parse(fs.readFileSync('../build/contracts/Register.json', 'utf8'));
const Election = artifacts.require("./Election.sol");
const theQuestion = "what is superior?"
const candidateNames = ["Chocolate", "Vanilla"];
try {
  var registrationContractAddress = registerContract.networks[5].address;

} catch (e){
   var registrationContractAddress = registerContract.networks[5777].address;
   console.log("here");
};

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

