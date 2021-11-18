function verify(email, callback) {
  const MongoClient = require("mongodb@3.1.4").MongoClient;
  const client = new MongoClient(yourConnectionURL);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db(yourDatabaseName);
    const users = db.collection(yourCollectionName);
    const query = { email: email, email_verified: false };

    users.update(
      query,
      { $set: { email_verified: true } },
      function (err, count) {
        client.close();

        if (err) return callback(err);
        callback(null, count.result.n > 0);
      }
    );
  });
}
