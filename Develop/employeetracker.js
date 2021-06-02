const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
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
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Find songs by artist':
            employeeSearch();
            break;
  
          case 'View all employees by department':
            multiSearch();
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
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };