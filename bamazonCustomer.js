var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port:3306,

    user: "root",

    password: "hahjimah1",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if(err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Run Inventory",
                "Buy an Item",
            ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "Run Inventory":
          runInventory();
          break;

        case "Buy an Item":
          buyItem();
          break;  
        }
    });
}

function runInventory() {
    var query = "SELECT * FROM product";
    connection.query(query, function(err, res) {
        console.table(res);
    });
    runSearch();
}

function buyItem() {
    inquirer
    .prompt({
            name: "select",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        })
        .then(function(answer) {
            inquirer
            .prompt({
                name: "buy",
                type: "input",
                message: "How many units would you like to buy?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            })
            .then(function(ans) {
                var query = "SELECT product, department, price, stock FROM product WHERE item_id = ?"
                connection.query(query, [answer.select], function(err, res) {
                  if(ans.buy < res[0].stock) {  
                    console.log("Your Order is " + 
                    "Product: " +
                    res[0].product + 
                    " || Department: " +
                    res[0].department +
                    " || Total Cost: " +
                    res[0].price * ans + 
                    " Thank you!"
                    )
                    var query1 = "UPDATE product SET stock = stock - ? WHERE item_id = ?"
                    connection.query(query1, [ans.buy, answer.select])
                  } else {
                      console.log("Not enough products on hand. We currently have: " + res[0].stock)
                  }
                  runSearch();
                })
                
            })
        })
}