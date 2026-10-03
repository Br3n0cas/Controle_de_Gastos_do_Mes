npm init -y
npm i -D typescript 
npm i -D @types/node
npm i -D vitest

npx tsc --init

tsconfig:
rootDir - Descomentar
outDir - Descomentar
"verbatimModuleSyntax": false

.gitignore - 
node_modules
dist

Compilar:
npx tsc

Rodar:
node dist/index.js