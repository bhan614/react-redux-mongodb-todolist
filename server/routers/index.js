const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'React TodoList'
	});
});

// 获取全部的todo
router.get('/getAllItems', (req, res, next) => {
	Todo.find({}).sort({'date': -1}).exec((err, todoList) => {
		if (err) {
			console.log(err);
		}else {
			res.json(todoList);
		}
	})
});

// 添加todo
router.post('/addItem', (req, res, next) => {
	let newItem = req.body;
	Todo.create(newItem, (err) => {
		if (err) {
			console.log(err);
		}else {
			Todo.find({}, (err, todoList) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todoList);
				}
			});
		}
	})
})

// 删除todo
router.post('/deleteItem', (req, res, next) => {
	console.log(req.body);
	let delete_id = req.body.id
	Todo.remove({id: delete_id}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			Todo.find({}, (err, todoList) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todoList);
				}
			});
		}
	});
});

module.exports = router;
