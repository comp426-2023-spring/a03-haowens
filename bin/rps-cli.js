#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
//A separate command line interface (wrapper) for both RPS and RPSLS (???)
// make importable 

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

if (args._.length === 0) {
    try {
        console.log(JSON.stringify(rps()));
        process.exit(0);
    } catch {
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
}
if (args._.length === 1) {
    try {
        const play = args._[0].toLowerCase();
        console.log(JSON.stringify(rps(play)));
        process.exit(0);
    } catch(e) {
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
}