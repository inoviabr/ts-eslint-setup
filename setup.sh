#!/bin/sh
wget https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.eslintrc.json -O .eslintrc.json;
wget https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.prettierignore -O .prettierignore;
wget https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/.prettierrc -O .prettierrc;
wget https://raw.githubusercontent.com/lucasrdrgs/ts-eslint-setup/main/tsconfig.json -O tsconfig.json;
npm i -D typescript ts-node prettier eslint eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin @darraghor/eslint-plugin-nestjs-typed > /dev/null;
echo "Successfully set up TS + ESLint + Prettier based off of NestJS's linting style.";
