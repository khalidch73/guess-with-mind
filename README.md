# guess-with-mind
1 Make it a Node.js project with app.ts by giving the following command:

2 Install types for Node.js

       npm init -y
       npm i @types/node -D
3 Create .gitignore file

4 add node-modules in .gitignore file

5 Create file app.ts Give the following command: install

            npm i inquirer
            npm i --save-dev @types/inquirer
            npm install chalk
            npm i --save-dev @types/chalk
            npm i node-banner
            npm i gradient-string
            npm i --save-dev @types/gradient-string
6 usage of node banner...// import showBanner from "node-banner";

          .(async () => { await showBanner('The Title', 'This is a suitable tagline'); })();
          .(async () => { await showBanner('WebCalculator', gradient.rainbow('This calculator can perform addition, multiplication, subtractions and division operation. kindly inter your 1st number now. ')); })();
7 usage of node banner.....// import gradient from "gradient-string";// gradient.red (any requirements)

8 use the validate function for conforming numbers instead of NAN.

         validate: (input) => { if (isNaN(input)) return "Kindly enter your number here:"; return true; } 8. use the calculator again and again.

9 change in the package.json file

            "type": "module",
            "bin": "./index.js",
            "version": "1.0.1",
10 add the following statement at the top of the code in the app.ts file

         #! /usr/bin/env node

          tsc --init

11 changing in the tsconfig.json file

               "target": "es2020", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
                "module": "NodeNext", /* Specify what module code is generated. */
               "moduleResolution": "NodeNext", /* Specify how TypeScript looks up a file from a given module specifier. */
               "outDir": "./dist",
12 tsc

13 node app.js

14 publish your project on npm---/

              npm publish

for local use of published projects use the following command---/

              npx projectName.
15 how to publish your project on npm

https://blog.shahednasser.com/how-to-create-a-npx-tool/
