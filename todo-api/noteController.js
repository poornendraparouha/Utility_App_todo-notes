let notes = [
	{
		id: 1,
		text: "Shopping List: Buy milk, bread, and eggs",
		createdOn: new Date(),
	},
	{
		id: 2,
		text: "Prepare presentation for Monday",
		createdOn: new Date(),
	},
];

let nextId = 3;

export const getAll = (req, res) => {
	return res.json(notes);
};

export const create = (req, res) => {
	const newNote = {
		id: nextId++,
		text: req.body.text,
		createdOn: new Date(),
	};
	notes.push(newNote);
	return res.status(201).json(newNote);
};

export const remove = (req, res) => {
	const id = parseInt(req.params.id, 10);
	const index = notes.findIndex((n) => n.id === id);
	if (index === -1) return res.status(404).json({ message: "Note not found" });
	const [deleted] = notes.splice(index, 1);
	return res.json(deleted);
};
