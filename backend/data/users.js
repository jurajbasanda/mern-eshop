import bcrypt from 'bcryptjs'
const Users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Juraj Basanda',
        email: 'juraj@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Patricia Bajakova',
        email: 'patricia@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default Users