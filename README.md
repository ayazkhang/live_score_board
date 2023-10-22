# Project Setup Guide

This guide will walk you through setting up and running a project, both with and without Docker. The project involves a Node.js application and a PostgreSQL database, and it provides API endpoints to manage categories. Follow the steps below to get started.

## Setting Up Without Docker
1. Ensure you have Postgres installed on your system.
2. Setup the database credentials for the postgres setup
2. Navigate to the project's root directory:
`cd root/app`

## Database setup
`cd root/config`
1. Please change the database config as per your setup
* Host: localhost
* User: postgres
* Password: postgres
* Database: postgres
* Port: 5432

#. Install the project's dependencies by running:
`npm install`

#. Creae build by running below command:
`npm run build`


## Run Migrations for creating tarrif table
-  Make sure that you have database postgres connected with the app
- `npx knex migrate:latest --env development`

## Run Seeders for inserting dummy data
- `npx knex seed:run --env development`

#. Run the project:
`npm start`

# Setting Up With Docker

1. Setting Up With Docker
2. Ensure you have Docker installed on your system.
3. Go to the root directory of the project.
4. Ensure that 5432, 3000, 8080 ports are available 

1. Build and start the Docker containers using the following command:
`docker-compose up --build`

# Accessing pgAdmin

1. After starting the Docker containers (or if you have a PostgreSQL database installed locally), you can access pgAdmin by visiting the following URL in your web browser:
`http://localhost:8080`


# Connecting pgAdmin to PostgreSQL
1. Use the following connection details to connect pgAdmin to the PostgreSQL database as per compose.yml:

* Host: localhost
* User: postgres
* Password: postgres
* Database: postgres
* Port: 5432

# Accessing API Endpoints
1. Once the setup is complete, you can interact with the project's API endpoints for managing categories. These endpoints are hosted at:
`http://localhost:3000/`


# create new Category (post):
1. pass name and parent_id
`http://localhost:3000/api/categories`


# Get All Categories (GET):
`http://localhost:3000/api/categories`


# Get Specific Category (GET):
`http://localhost:3000/api/categories/2`

# Running Unit Tests
1. To run the project's unit and integrations tests, execute the following command in the root directory of the project:
`npm test`

Thank you for your consideration. Follow these instructions to set up and run the project successfully.













