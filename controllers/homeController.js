const _fetchUsers = ()=>{
    return global.users;
}
const _getUsers = (req, res) =>{
    const model = {
        users: _fetchUsers()
    }
    res.status(200)
    .json(model)
}
const _getUserByname = (req, res) =>{
    const userN = req.params.username 
    const users = global.users
    const result = users.filter(user=>user.username==userN)
    if(result.length ==1){
        res.status(200).json(result)
    }else{
        res.status(400).json({
            message:'Could not found the user ${userN}'
        })
    }
}
const _addUser = (user)=>{
    global.users.push(user)
   return user
}
const _createUsers = (req,res)=>{
    const user = {
        username: req.body.username,
        email:req.body.email
    }
    res.status(200)
    .json(user)
}
exports.getUsers = _getUsers
exports.createUsers = _createUsers
exports.getUserByname = _getUserByname