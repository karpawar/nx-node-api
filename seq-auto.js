var SequelizeAuto = require('sequelize-auto')

// node seq-auto.js will generate all the models for given table 


// var auto = new SequelizeAuto('classicmodels', 'root', 'root',{
//   host: 'localhost',
//   port:'3306'
// });

var auto = new SequelizeAuto('Inventory', 'postgres', 'root@123', {
    host: 'localhost',
    dialect:  'postgres', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql', but install perticular dialect
    directory: './models', // prevents the program from writing to disk
    port: '5432',
    additional: {
        timestamps: false
        //...
    },
    
    //tables:['table1', 'table2', 'table3']
    //...
})


auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

