const express = require("express");

const {
  createEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
  deleteAllEmployees,
  updateEmployee
} = require('../controller/employeeController')

const router = express.Router();

//POST
router.post("/", createEmployee)

//GET
router.get('/', getEmployees)
router.get('/:id', getEmployee)

//PATCH 
router.patch('/:id', updateEmployee)

//DELETE
router.delete('/', deleteAllEmployees)
router.delete('/:id',deleteEmployee)

module.exports = router;