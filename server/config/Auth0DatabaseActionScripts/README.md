### These scripts are used in Auth0's dashboard, however the templates generated for MongoDB have a few errors in them. After hours of searching for solutions to Auth0's faulty database action scripts, we have fixed all the errors. Hope whoever reads this finds this useful.

`const client = new MongoClient(yourConnectionURL);`
`const db = client.db(yourDatabaseName);`
`const users = db.collection(yourCollectionName);`

### Replace `yourConnectionURL` with your actual connection URL.
### Replace `yourDatabaseName` with your actual database name.
### Replace `yourCollectionName` with your actual collection name.

### Don't forget to hit save on Auth0's dashboard when pasting the scripts in!

### Enjoy.