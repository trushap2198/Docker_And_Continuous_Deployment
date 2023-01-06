# Docker_And_Continuous_Deployment
Automatic Builds with Github Actions, Docker Hub, and Amazon ECR

A simple apparel cost and price display application:

PostgreSQL: Database backend
Flask: 2.0.1: API consuming backend for Prices
Node JS: API consuming backend for apparels in the database
PHP: Front-end of the application


The images are tagged with the version as the container name to allow a single repository "trusha2198/compose" in the ECR registry to store all the images
Note: General practice is to use one image per repository, but each related images in one repository, differed by their tagged versions

Docker commands for the local machine:
### To build (remember in the detach mode, else the job never ends in the workflow):
  ```
  docker compose up --build -d
  ```
  
### To push the composed images
 ```
 docker compose push
 ``` 
