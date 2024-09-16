const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Harne123@cluster0.damp1.mongodb.net/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};

