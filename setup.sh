#!/bin/sh
wget -q https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.eslintrc.json -O .eslintrc.json;
wget -q https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.prettierignore -O .prettierignore;
wget -q https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.prettierrc -O .prettierrc;
wget -q https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/tsconfig.json -O tsconfig.json;
npm i --quiet -D typescript ts-node prettier eslint eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @darraghor/eslint-plugin-nestjs-typed;
echo "Successfully set up TS + ESLint + Prettier based off of NestJS's linting style.";
