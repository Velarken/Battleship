import "./styles.css"
const Ship = require("./ships")

// Player Ships
const carrier = new Ship('carrier',5);
const battleship = new Ship('battleship',4);
const destroyer = new Ship('destroyer', 3);
const submarine1 = new Ship('submarine', 3);
const submarine2 = new Ship('submarine',3);
const patrolBoat1 = new Ship('patrol boat',2);
const patrolBoat2 = new Ship('patrol boat', 2);
const patrolBoat3 = new Ship('patrol boat',2);

// CPU Ships 
const cpuCarrier = new Ship('carrier',5);
const cpuBattleship = new Ship('battleship',4);
const cpuDestroyer = new Ship('destroyer', 3);
const cpuSubmarine1 = new Ship('submarine', 3);
const cpuSubmarine2 = new Ship('submarine',3);
const cpuPatrolBoat1 = new Ship('patrol boat',2);
const cpuPatrolBoat2 = new Ship('patrol boat', 2);
const cpuPatrolBoat3 = new Ship('patrol boat',2);