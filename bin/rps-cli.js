#!/usr/bin/env node

//A separate command line interface (wrapper) for both RPS and RPSLS (???)
//must be case agnostic

import minimist from "minimist";

const args = minimist(process.argv.slice(2)); 

if ("h" in args || "help" in args) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)");
    console.log("\n");
    console.log("   -h, --help      display this help message and exit");
    console.log("   -r, --rules     display the rules and exit");
    console.log("\n");
    console.log("Examples:");
    console.log('   node-rps        Return JSON with single player RPS result. e.g. {"player":"rock"}');
    console.log('   node-rps rock   Return JSON with results for RPS played against a simulated opponent. e.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
}

if ("r" in args || "rules" in args) {
    console.log("Rules for Rock Paper Scissors:");
    console.log("\n");
    console.log("   - Scissors CUTS Paper");
    console.log("   - Paper COVERS Rock");
    console.log("   - Rock CRUSHES Scissors");
    process.exit(0);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const play = args._[0].toLowerCase();

if (args._.length === 1) {
    let x = randomNumber(1,3);
    if (x == 1) {
        console.log({"player":"rock"});
    } 
    if (x == 2) {
        console.log({"player":"paper"});
    }
    if (x == 3) {
        console.log({"player":"scissors"});
    }
    process.exit(0);
} else if ((play === "rock")  && args.length() === 2) {
    let x = randomNumber(1,3);
    if (x == 1) {
        console.log({"player":"rock", "opponent":"rock", "result":"tie"});
    } 
    if (x == 2) {
        console.log({"player":"rock", "opponent":"paper", "result":"loss"});
    }
    if (x == 3) {
        console.log({"player":"rock", "opponent":"scissors", "result":"win"});
    }
    process.exit(0);
} else if ((play === "paper")  && args.length() == 2) {
    let x = randomNumber(1,3);
    if (x == 1) {
        console.log({"player":"paper", "opponent":"rock", "result":"win"});
    } 
    if (x == 2) {
        console.log({"player":"paper", "opponent":"paper", "result":"tie"});
    }
    if (x == 3) {
        console.log({"player":"paper", "opponent":"scissors", "result":"loss"});
    }
    process.exit(0);
} else if ((play === "scissors")  && args.length() === 2) {
    let x = randomNumber(1,3);
    if (x == 1) {
        console.log({"player":"scissors", "opponent":"rock", "result":"loss"});
    } 
    if (x == 2) {
        console.log({"player":"scissors", "opponent":"paper", "result":"win"});
    }
    if (x == 3) {
        console.log({"player":"scissors", "opponent":"scissors", "result":"tie"});
    }
    process.exit(0);
} else {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)");
    console.log("\n");
    console.log("   -h, --help      display this help message and exit");
    console.log("   -r, --rules     display the rules and exit");
    console.log("\n");
    console.log("Examples:");
    console.log('   node-rps        Return JSON with single player RPS result. e.g. {"player":"rock"}');
    console.log('   node-rps rock   Return JSON with results for RPS played against a simulated opponent. e.g {"player":"rock","opponent":"scissors","result":"win"}');
    console.log('\n');
    console.log("Rules for Rock Paper Scissors:");
    console.log("\n");
    console.log("   - Scissors CUTS Paper");
    console.log("   - Paper COVERS Rock");
    console.log("   - Rock CRUSHES Scissors");
    process.exit(0);
}