### List basic commands mongo

- `show dbs`Shows all the database in you computer.
- `use name_database` Starts using one specific database with the given name_database.
- `show collections` Shows all the collections inside the database you are using after running the `use`command.
- `db.help()` Lists all the command that can be use for the database.
- `db.name_collection.help()` Lists all the commands that can be used for one collection.
- `db.name_collection.find({expression})` Finds all the documents inside that collection that matches the specific expression. An example could be `db.name_collection.find({name: 'foo'})`.
- `db.name_collection.find({expression}, {projection})` The projection allow us to especify what properties we want to retrivwe from the database. A value of 1 means that we want that property, a value of 0 means that we don't want that property. An example could be `db.name_collection.find({name: 'foo'}, {name: 1, _id: 0})`.
