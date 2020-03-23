# sqlnode

(❀ㅇㅅㅇ) - "SQL in NodeJs !"

## What was used ?

**Sequelize, PostgreSql**:

`yarn add express pg pg-hstore sequelize`

**Sequelize Cli - Dev Dependency**:

`yarn add sequelize-cli -D`

**Nodemon - Dev Dependency**:

`yarn add nodemon -D`

## Sequelize Commands

Create Database: `yarn sequelize db:create`

Create Migrations: `yarn sequelize migration:create --name=create-<table_name>` and `yarn sequelize db:migrate`

Undo Last Migrate: `yarn sequelize db:migrate:undo`

## :runner: To run this project ?

In project's root folder:

`yarn dev`

**Based on** [SQL no Node.js com Sequelize | Masterclass #01](https://www.youtube.com/watch?v=Fbu7z5dXcRs)
