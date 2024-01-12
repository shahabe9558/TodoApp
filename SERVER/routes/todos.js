const express = require('express');
const { createTodo } = require('../controllers/createTodo');
const { getToDo, getbyId } = require('../controllers/getTodo');
const { updateToDo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTo');
const router = express.Router();



router.post('/creatodo', createTodo);
router.get('/getTodo', getToDo);
router.get('/getTodoId/:id', getbyId);
router.put('/updateTodo/:id', updateToDo);
router.delete('/deleteTodo/:id', deleteTodo);
router.get('/testing', (req, res)=> {
   res.send("fetched");
})

module.exports = router;
