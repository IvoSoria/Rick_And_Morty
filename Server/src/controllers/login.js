const {User} = require('../DB_connection')

const login = async (req, res) => {

    const {email, password} = req.query;

    try {
        if (!email || !password) {
            res.status(400).json({message: "Faltan datos"});

        const user = await User.findOne({ where: {email}
        })
        if (!user) {
            res.status(404).json({message: "Usuario no encontrado."});
        }
        user.password === password
            ? res.status(200).json({ access: true, id: user.id })
            : res.status(403).json({ message: "Contraseña incorrecta." });
    }  
    } catch (error) {
        res.status(500).json({message: error });
    }     
}

module.exports = {login}