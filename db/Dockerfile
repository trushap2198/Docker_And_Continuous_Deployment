FROM postgres
WORKDIR /database
ENV POSTGRES_HOST_AUTH_METHOD=trust 
#env variable to make them available and command line execution

COPY ./init.sql /docker-entrypoint-initdb.d/
