const Atom = require('../models/Atom');

exports.createAtom = async (req, res) => {
    const { name, description } = req.body;

    try {
        const atom = new Atom({ name, description, owner: req.user.id });
        await atom.save();
        res.status(201).json(atom);
    } catch (error) {
        res.status(400).json({ error: 'Error creating ATOM' });
    }
};

exports.getAtoms = async (req, res) => {
    try {
        const atoms = await Atom.find().populate('owner', 'username');
        res.json(atoms);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching ATOMs' });
    }
};
