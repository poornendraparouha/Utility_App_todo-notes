
let todos = [
  { id: 1, text: "Go to Gym at 9", completed: false },
  { id: 2, text: "Go to Office at 10", completed: false },
  { id: 3, text: "Meeting at 11", completed: false }
];

let nextId = 4;

// Get all todos
export const getAll = (req, res) => {
  return res.json(todos);
};

// Create new todo
export const create = (req, res) => {
  const newTodo = {
    id: nextId++,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  return res.status(201).json(newTodo);
};

// Delete todo
export const remove = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  const [deleted] = todos.splice(index, 1);
  return res.json(deleted);
};
