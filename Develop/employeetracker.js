const mysql = require('mysql');
const inquirer = require('inquirer');

//connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employee_trackerDB',
});
connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'View all employees',
          'View all employees by department',
          'Add Employee',
          'Remove Employee',
          'Update Employee Role',
          'Exit'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View all Employees':
            employeeSearch();
            break;
  
          case 'View all employees by department':
            viewDepts();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
  
          case 'Remove Employee':
            removeEmployee();
            break;
  
          case 'Update Employee Role':
            updateEmployeeRole();
            break;
            
            case 'Exit':
                connection.end();
                break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;

        }
      });
  };

  function employeeSearch(){
      connection.query("SELECT * FROM employee", (err,data) => {
          if (err) throw err;
          console.log("Displaying all employees");
          console.table(data);
          runSearch();
      })
  };

  function viewDepts(){
      connection.query("SELECT * FROM departments", (err, data)=> {
          if (err) throw err;
          console.log("Displaying all departments");
          console.table(data);
          runsSearch();
      })
  };