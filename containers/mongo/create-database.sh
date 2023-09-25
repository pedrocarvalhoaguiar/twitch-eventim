#!/bin/bash

# Start the MongoDB server
mongod --fork --logpath /var/log/mongodb/mongod.log

# Wait for MongoDB to start
sleep 5

# MongoDB script to create the database, user, and grant privileges
mongo admin --eval "db.createRole({
  role: 'superuser',
  privileges: [{ resource: { db: 'twitch', collection: '' }, actions: ['dbAdmin', 'readWrite', 'read'] }],
  roles: []
})"

mongo admin --eval "db.createUser({
  user: 'twitch_user',
  pwd: '123',
  roles: [{ role: 'superuser', db: 'twitch' }]
})"

# Stop the MongoDB server
mongod --shutdown

# Restart MongoDB to apply changes
mongod