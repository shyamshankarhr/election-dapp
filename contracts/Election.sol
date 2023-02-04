pragma solidity 0.8.7;

contract Election {

	// Store accounts that have voted
	mapping(address => bool) public voters;

	bool public ended;

	// Model a candidate
	struct Candidate {
		uint id;
		string name;
		uint voteCount;
	}
	// Store Candidates
	// Fetch Candidates
	mapping(uint => Candidate) public candidates;
	// Store Candidates count
	uint public candidatesCount;

	// voted event
	event votedEvent(uint indexed _candidateId);

	// Constructor
	constructor() {
		addCandidate("Chocolate");
		addCandidate("Vanilla");
		ended = false;
	}

	function addCandidate(string memory _name) private {
		candidatesCount++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	}

	function vote(uint _candidateId) public {

		// require that they haven't voted before
		// require a valid candidate

		require(!voters[msg.sender] && _candidateId > 0 && _candidateId <= candidatesCount && !ended);

		// record that voter has voted
		voters[msg.sender] = true;

		// update candidate vote count
		candidates[_candidateId].voteCount ++;

		// trigger voting event
		emit votedEvent(_candidateId);
	}

	function endElection(uint _candidateId) public {

		ended = true;

	}
}
