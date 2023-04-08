#!/usr/bin/env node

//A separate command line interface (wrapper) for both RPS and RPSLS (???)
// make importable 

import minimist from "minimist";

const args = minimist(process.argv.slice(2)); 

if ("h" in args || "help" in args) {
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('\n');
    console.log('   -h, --help        display this help message and exit');
    console.log('   -r, --rules       display the rules and exit');
    console.log('\n');
    console.log('Examples:');
    console.log('   node-rpsls        Return JSON with single player RPSLS result. e.g. {"player":"rock"}');
    console.log('   node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent. e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}

if ("r" in args || "rules" in args) {
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log('\n');
    console.log('   - Scissors CUTS Paper');
    console.log('   - Paper COVERS Rock');
    console.log('   - Rock SMOOSHES Lizard');
    console.log('   - Lizard POISONS Spock');
    console.log('   - Spock SMASHES Scissors');
    console.log('   - Scissors DECAPITATES Lizard');
    console.log('   - Lizard EATS Paper');
    console.log('   - Paper DISPROVES Spock');
    console.log('   - Spock VAPORIZES Rock');
    console.log('   - Rock CRUSHES Scissors');
    process.exit(0);
}


if (args._.length === 0) {
    let x = Math.floor(Math.random() * 5);
    if (x === 0) {
        console.log({"player":"rock"});
    } 
    if (x === 1) {
        console.log({"player":"paper"});
    }
    if (x === 2) {
        console.log({"player":"scissors"});
    }
    if (x === 3) {
        console.log({"player":"lizard"});
    }
    if (x === 4) {
        console.log({"player":"spock"});
    }
    process.exit(0);
} else if (args._.length === 1) {
    let x = Math.floor(Math.random() * 5);
    const play = args._[0].toLowerCase();
    if (play === "rock") {
        if (x === 0) {
            console.log({"player":"rock", "opponent":"rock", "result":"tie"});
        } 
        if (x === 1) {
            console.log({"player":"rock", "opponent":"paper", "result":"loss"});
        }
        if (x === 2) {
            console.log({"player":"rock", "opponent":"scissors", "result":"win"});
        }
        if (x === 4) {
            console.log({"player":"rock", "opponent":"lizard", "result":"win"});
        }
        if (x === 5) {
            console.log({"player":"rock", "opponent":"spock", "result":"loss"});
        }
        process.exit(0);
    } else if (play === "paper") {
        if (x === 0) {
            console.log({"player":"paper", "opponent":"rock", "result":"win"});
        } 
        if (x === 1) {
            console.log({"player":"paper", "opponent":"paper", "result":"tie"});
        }
        if (x === 2) {
            console.log({"player":"paper", "opponent":"scissors", "result":"loss"});
        }
        if (x === 4) {
            console.log({"player":"paper", "opponent":"lizard", "result":"loss"});
        }
        if (x === 5) {
            console.log({"player":"paper", "opponent":"spock", "result":"win"});
        }
        process.exit(0);
    } else if (play === "scissors") {
        if (x === 0) {
            console.log({"player":"scissors", "opponent":"rock", "result":"loss"});
        } 
        if (x === 1) {
            console.log({"player":"scissors", "opponent":"paper", "result":"win"});
        }
        if (x === 2) {
            console.log({"player":"scissors", "opponent":"scissors", "result":"tie"});
        }
        if (x === 4) {
            console.log({"player":"scissors", "opponent":"lizard", "result":"win"});
        }
        if (x === 5) {
            console.log({"player":"scissors", "opponent":"spock", "result":"loss"});
        }
        process.exit(0);
    } else if (play === "lizard") {
        if (x === 0) {
            console.log({"player":"lizard", "opponent":"rock", "result":"loss"});
        } 
        if (x === 1) {
            console.log({"player":"lizard", "opponent":"paper", "result":"win"});
        }
        if (x === 2) {
            console.log({"player":"lizard", "opponent":"scissors", "result":"loss"});
        }
        if (x === 4) {
            console.log({"player":"lizard", "opponent":"lizard", "result":"tie"});
        }
        if (x === 5) {
            console.log({"player":"lizard", "opponent":"spock", "result":"win"});
        }
        process.exit(0);
    } else if (play === "spock") {
        if (x === 0) {
            console.log({"player":"spock", "opponent":"rock", "result":"win"});
        } 
        if (x === 1) {
            console.log({"player":"spock", "opponent":"paper", "result":"loss"});
        }
        if (x === 2) {
            console.log({"player":"spock", "opponent":"scissors", "result":"win"});
        }
        if (x === 4) {
            console.log({"player":"spock", "opponent":"lizard", "result":"loss"});
        }
        if (x === 5) {
            console.log({"player":"spock", "opponent":"spock", "result":"tie"});
        }
        process.exit(0);
    } else {
        console.log('Usage: node-rpsls [SHOT]');
        console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
        console.log('\n');
        console.log('   -h, --help        display this help message and exit');
        console.log('   -r, --rules       display the rules and exit');
        console.log('\n');
        console.log('Examples:');
        console.log('   node-rpsls        Return JSON with single player RPSLS result. e.g. {"player":"rock"}');
        console.log('   node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent. e.g {"player":"rock","opponent":"Spock","result":"lose"}');
        console.log('\n');
        console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
        console.log('\n');
        console.log('   - Scissors CUTS Paper');
        console.log('   - Paper COVERS Rock');
        console.log('   - Rock SMOOSHES Lizard');
        console.log('   - Lizard POISONS Spock');
        console.log('   - Spock SMASHES Scissors');
        console.log('   - Scissors DECAPITATES Lizard');
        console.log('   - Lizard EATS Paper');
        console.log('   - Paper DISPROVES Spock');
        console.log('   - Spock VAPORIZES Rock');
        console.log('   - Rock CRUSHES Scissors');
        process.exit(0);
    }
} else {
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('\n');
    console.log('   -h, --help        display this help message and exit');
    console.log('   -r, --rules       display the rules and exit');
    console.log('\n');
    console.log('Examples:');
    console.log('   node-rpsls        Return JSON with single player RPSLS result. e.g. {"player":"rock"}');
    console.log('   node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent. e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log('\n');
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log('\n');
    console.log('   - Scissors CUTS Paper');
    console.log('   - Paper COVERS Rock');
    console.log('   - Rock SMOOSHES Lizard');
    console.log('   - Lizard POISONS Spock');
    console.log('   - Spock SMASHES Scissors');
    console.log('   - Scissors DECAPITATES Lizard');
    console.log('   - Lizard EATS Paper');
    console.log('   - Paper DISPROVES Spock');
    console.log('   - Spock VAPORIZES Rock');
    console.log('   - Rock CRUSHES Scissors');
    process.exit(0);
}