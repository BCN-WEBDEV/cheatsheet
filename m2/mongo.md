## List basic commands mongo

#### General

- `show dbs`Shows all the database in you computer.

- `use name_database` Starts using one specific database with the given name_database.

- `show collections` Shows all the collections inside the database you are using after running the `use`command.

- `db.help()` Lists all the command that can be use for the database.

- `db.name_collection.help()` Lists all the commands that can be used for one collection.


#### Find

- `db.name_collection.find({expression})` Finds all the documents inside that collection that matches the specific expression. An example could be `db.name_collection.find({name: 'foo'})`.


#### Update

- `db.name_collection.updateOne({expression}, {update})` Updates the document found by the expression with the `{update}`. If `$set` operator is not used, the document will be replaced completly by the `{update}`. An example could be `db.name_collection.updateOne({name: 'foo'}, {$set: {number_of_books: 40}})`. It returns the document before it was updated.

- `db.name_collection.updateMany({expression}, {update})` Updates as many documents as it founds based on the expression. Same rules apply as the `updateOne`.


#### Insert

- `db.name_collection.insertOne(document)` Adds one document to the collection.

- `db.name_collection.insertMany([document1, document2, ...])` Adds one or more documents to the collection, always expects and array.


#### Delete

- `db.name_collection.deletOne({expression})` Deletes the document found based on the expression.

- `db.name_collection.deletMany({expression})` Deletes as many documents as it founds based on the expression.


#### Extra

- `db.name_collection.find({expression}, {projection})` The projection allow us to especify what properties we want to retrive from the database. A value of 1 means that we want that property, a value of 0 means that we don't want that property. An example could be `db.name_collection.find({name: 'foo'}, {name: 1, _id: 0})`.

- `db.name_collection.find().pretty()` It formats the data retrived to be more readeble.

- `db.name_collection.find().limit(number)` Limits the retrived number of documents from the databes to the number especified.

- `db.name_collection.find().sort({expression})` Sorts the retrived documents retrived from the database based on the expression. A value of 1 means sort ascending, a value of -1 means sort descending. An example could be `db.name_collection.find({name: 'foo'}).sort({number_of_books: 1)`.


#### Links to documentation

- [Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)
- [Operators](https://docs.mongodb.com/manual/reference/operator/query/)
- [Update operators for arrays such as $ or $[]](https://docs.mongodb.com/manual/reference/operator/update-array/)
