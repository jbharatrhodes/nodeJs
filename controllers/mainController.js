const getIndex = (req, res) =>{
    const model = {
        user: {
            username: 'Bharat',
            firstname: 'Paudyal'
        },
        title : 'Node express'
    }
    res.render('home', model)
}
const getUsers = (req,res) =>{
    res.render('contact')
}

exports.getIndexView = getIndex
exports.getUsersView = getUsers
