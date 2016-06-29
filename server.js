var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'meep meep',
	completed: false
}, {
	id: 2,
	description: 'asdfasdfasdfa',
	completed: false
}, {
	id: 3,
	description: 'oneone',
	completed: true
}]

app.get('/todos', function (req, res) {
	res.json(todos);
})

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	todos.forEach(function (todo) {
		if(todoId === todo.id) {
			matchedTodo = todo;
		}
	})

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
})

app.get('/', function (req, res) {
	res.send('Todo API root')
})

app.listen(PORT, function () {
	console.log("Express listening on port " + PORT)
})