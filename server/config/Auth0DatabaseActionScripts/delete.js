function remove(id, callback) {
  const MongoClient = require("mongodb@3.1.4").MongoClient;
  const client = new MongoClient(yourConnectionURL);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db(yourDatabaseName);
    const users = db.collection(yourCollectionName);

    users.remove({ email: id }, function (err) {
      client.close();

      if (err) return callback(err);
      callback(null);
    });
  });
}
