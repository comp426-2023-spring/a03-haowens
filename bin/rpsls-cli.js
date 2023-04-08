#!/usr/bin/env node

import { rpsls } from "../lib/rpsls.js";

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
    try {
        console.log(JSON.stringify(rpsls()));
    } catch {
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
} else if (args._.length === 1) {
    try {
        const play = args._[0].toLowerCase();
        console.log(JSON.stringify(rpsls(play)));
        process.exit(0);
    } catch (e) {
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
}