# leadManagement

To evaluate my assignment : 

    Go into folder leadManagement

    Install node (v10.x)

    Install mysql server 5.7

    Import mysql dump from file install.sql

    GRANT ALL PRIVILEGES ON *.* TO 'taran'@'localhost' IDENTIFIED BY 'taran';

    Open terminal in folder

    Run command ‘npm install’

    Run node server.js

  
Code Workflow (Step-wise) :


    Server.js > Routes > Controllers > Services > Repositories > SQL

    Server.js (express server setup)

    Routes (used to define API paths and connect server to code)

    Controllers (Object validations)

    Services (Connect controllers to repositories)

    Repositories (Connect node to SQL server using sequelize)

    SQL (Primary database)
