FROM postgres:latest

COPY create-database.sh /docker-entrypoint-initdb.d/

VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

EXPOSE 5432
