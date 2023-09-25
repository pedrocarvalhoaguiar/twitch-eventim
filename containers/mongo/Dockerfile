FROM mongo:latest

COPY create-database.sh /docker-entrypoint-initdb.d/

VOLUME ["/data/db", "/var/log/mongodb"]

EXPOSE 27017

CMD ["mongod"]