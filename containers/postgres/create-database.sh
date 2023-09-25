#!/bin/bash
set -e

echo "Creating default database"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE USER twitch_user WITH LOGIN ENCRYPTED PASSWORD '123' SUPERUSER;

    CREATE DATABASE "twitch";
    ALTER DATABASE twitch OWNER TO twitch_user;
    GRANT ALL PRIVILEGES ON DATABASE twitch TO twitch_user;
    
EOSQL
