export { rps }

function rps(shot) {
    let x = Math.floor(Math.random() * 3);
    let auto;
    let res;
    

    if (x === 0) { auto = "rock"; }
    if (x === 1) { auto = "paper"; }
    if (x === 2) { auto = "scissors"; }

    if (shot !== "rock" && shot !== "paper" && shot !== "scissors") {
        throw new Error();
    }

    if (shot === undefined) { 
        return {player: auto};
    } else if (shot === "rock") {
        if (auto === "rock") { res = "tie"; } 
        if (auto === "paper") { res = "loss"; }
        if (auto === "scissors") { res = "win"; }
    } else if (shot === "paper") {
        if (auto === "rock") { res = "win"; } 
        if (auto === "paper") { res = "tie"; }
        if (auto === "scissors") { res = "loss"; }
    } else if (shot === "scissors") {
        if (auto === "rock") { res = "loss"; } 
        if (auto === "paper") { res = "win"; }
        if (auto === "scissors") { res = "tie"; }
    } 

    return {player:shot,opponent:auto,result:res};
}

function rspls(shot) {

}