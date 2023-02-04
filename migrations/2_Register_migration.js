const Register = artifacts.require("Register");
const studentHashes = ["0xfa5358fd7688fc08423a37459877215dcc2feb9eead768ff0b7e32c9311c2b94","0x5d3c5a64145e704481a60f32600a239c283fcb48dec81aaff59b13d9cca89a06"];


module.exports = function (deployer) {
	deployer.deploy(Register,studentHashes);
};