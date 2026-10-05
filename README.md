# Controle de Gastos do Mês

### Projeto individual desenvolvido em TypeScript para registrar, consultar e gerar relatórios de despesas mensais.

## Configuração inicial do projeto
1. Inicialização do projeto
npm init -y

Cria o arquivo package.json, que armazena as informações do projeto, scripts e dependências utilizadas.

2. Instalação do TypeScript
npm i -D typescript

Instala o TypeScript como dependência de desenvolvimento, permitindo escrever, verificar e compilar arquivos .ts.

3. Tipos do Node.js
npm i -D @types/node

Adiciona as definições de tipos do Node.js para que o TypeScript reconheça recursos e módulos do ambiente Node.

4. Instalação do Vitest
npm i -D vitest

Instala o Vitest, utilizado para criar e executar os testes automatizados do projeto.

5. Criação do tsconfig.json
npx tsc --init

Cria o arquivo tsconfig.json, responsável pelas configurações do compilador TypeScript.

6. Configuração do TypeScript

No tsconfig.json, foram configuradas as opções relacionadas à entrada e saída da compilação:

rootDir — define a pasta onde estão os arquivos TypeScript do projeto.
outDir — define a pasta onde os arquivos JavaScript compilados serão gerados.
"verbatimModuleSyntax": false — permite que o TypeScript faça os ajustes necessários nos imports e exports durante a compilação.
"strict": true — ativa verificações mais rigorosas do TypeScript para ajudar a encontrar erros durante o desenvolvimento.

7. Configuração do .gitignore

O arquivo .gitignore impede que arquivos desnecessários sejam enviados para o GitHub:

node_modules — contém as dependências instaladas pelo npm e pode ser recriado usando npm install.
dist — contém os arquivos JavaScript gerados pela compilação e não precisa ser versionado.

8. Compilação do projeto
npx tsc

Executa o compilador TypeScript e transforma os arquivos .ts em arquivos .js, colocando o resultado na pasta definida em outDir.

9. Execução do projeto compilado
node dist/index.js

Executa com o Node.js o arquivo index.js gerado após a compilação.

10. Verificação do TypeScript
npx tsc --noEmit

Verifica se existem erros de TypeScript sem gerar os arquivos .js. Essa verificação é utilizada para confirmar que o projeto está compilando corretamente.

11. Execução dos testes
npm test

Executa os testes automatizados do projeto utilizando o Vitest.

12. Execução durante o desenvolvimento
npm run dev

Executa o src/index.ts diretamente utilizando o script dev configurado no package.json.

## Estrutura do projeto

src/tipos.ts
   │
   ▼
src/despesas.ts
   │
   ▼
src/relatorio.ts
   │
   ▼
src/index.ts
   │
   ▼
src/Relatório no terminal

src/*.test.ts ─────► Testa as funções dos módulos

## Registro de uso de IA

A IA foi utilizada como ferramenta de apoio durante o desenvolvimento, principalmente na parte das implementações, explicação dos conceitos e auxiliar na criação do README e teste. As implementações geradas foram analisadas e testadas antes de serem utilizadas no projeto.

| Função | Uso da IA | Revisão e ajustes |
|---|---|---|
| `adicionarDespesa` | Auxílio na implementação das validações de valor e mês. | Ajuste das mensagens de erro e criação de teste para garantir que o array original não fosse alterado. |
| `removerDespesa` | Auxílio na implementação da remoção pelo ID. | Verificação do retorno de um novo array e dos casos normal e de borda. |
| `despesasDaCategoria` | Auxílio na implementação da filtragem por categoria. | Verificação do comportamento com diferentes categorias e sem resultados. |
| `totalGasto` | Auxílio na implementação do cálculo do total. | Testes para valores normais e para o caso de nenhuma despesa. |
| `maiorDespesa` | Auxílio na implementação da busca pela maior despesa. | Ajuste para tratar corretamente um array vazio. |
| `descricaoCategoria` | Auxílio na estruturação das descrições das categorias. | Conferência das quatro categorias e dos textos retornados. |
| `matrizCategoriaMes` | Auxílio na criação da matriz de gastos por categoria e mês. | Ajuste devido ao `strict: true` e verificação das posições da matriz. |
| `formatarRelatorio` | Auxílio na estruturação e formatação do relatório. | Ajuste do teste que esperava `"TRANSPORTE"` enquanto a implementação retornava `"Transporte"`. |

### Reflexão sobre o uso de IA

Durante o desenvolvimento do projeto, a IA foi usada para fazer as funções, durante cada função, foi revisado o código e houve momentos onde a função em si precisava ser ajustada para se adequar aos requisitos do projeto como, houve momentos que foi usada para explicar erros encontrados nos testes. Em matrizCategoriaMes, foi necessário ajustar o acesso à matriz devido ao strict: true. Por desconfiança da implementação na função adicionarDespesa, foi acrescentado um teste para verificar se o array original permanecia inalterado. Esse teste confirmou que a função deveria retornar um novo array em vez de modificar o existente.