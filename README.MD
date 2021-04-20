# Purpose
The purpose of this repository is to group the main commands to set up Typescript in a machine using the package manager npm.

## 1. Commands

#### Initializing a npm project
`npm init`

#### Adding globally Typescript as an dependency
`npm install -g typescript`

#### Installing companion libraries to able Typescript to type declarations
Example:

`npm install --save-dev @types/node @types/express`

In some imports, VS Code can show an ellipse (...) that says what is the command to install those companion libraries.

#### Creating a configuration file
`tsc --init`

It creates a file called "tsconfig.json"

#### Creating javascript files from Typescript Files considering parameters of configuration file
`tsc`

#### Program that restart the process after modifications and compile Typescript when it restarts.
`npm i ts-node-dev --save-dev`

After the installation, add the following script to package.json file:

`"dev:server": "ts-node-dev --respawn --transpile-only ./filepath.ts"`

And run the script by using:

`npm run dev:server`

#### Creating a React.Js project using typescript as template
`npx create-react-app my-app --template typescript`

## 2. Configuration

#### Extension of the files
The extension of a Typescript file is .ts instead of .js

#### Some parameters of tsconfig.json
| Parameter  | purpose |
| ------------- |:-------------:|
| outDir      | Path for the new js files (ex: ./build, ./dist) |

## 3. Usabilities

#### Importing a package
Example: 

``` 
import express from 'express'
const app = express()
...
```