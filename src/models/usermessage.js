const val = require('validator');
const dbConn = require('../db/conn');

const data = function(data){
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.message = data.message; 
}

data.createNewData = (newData, result) => {
    console.log("new Data");
    console.log('INSERT INTO messages SET ?',newData);
    dbConn.query('INSERT INTO messages SET ?', newData, (err, res) =>{
        if(err)
        {
            console.log(err);
            result(null, err);
        }
        else
        {
            console.log('Data added successfully');
            console.log(res);
            result(null, res);
        }
    })
}

module.exports = data;