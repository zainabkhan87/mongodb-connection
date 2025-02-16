const getAllusers=(req,res)=>{
    res.send('MY ALL USERS ')
}

const getUserById=(req,res)=>{
   res.send('Following are the users by their ID')
}

const postUserName=(req,res)=>{
    res.send('HELLO USER!')

}


module.exports={getAllusers,getUserById,postUserName}