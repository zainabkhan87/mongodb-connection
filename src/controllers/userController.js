const getAllusers=(req,res)=>{
    res.send('MY ALL USERS ')
}

const getUserById=(req,res)=>{
   res.send('Following are the users by their ID')
}


module.exports={getAllusers,getUserById}