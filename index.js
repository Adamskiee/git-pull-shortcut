#!/usr/bin/env node

import { program } from "commander";
import { spawn } from "child_process";

program
    .version("1.0.0")
    .description("CLI that setup projects")
    .option("-r, --repo <string>", "Add the repository name of the project")
    .action(  (options) => {
        const {repo} = options;

        spawn("git", ["branch", "main"]);
        spawn("git", [`git remote add origin git@github.com:Adamskiee/${repo}`]);
        spawn("git", ["push", "origin", "main"]);

    });

program.parse(process.argv);