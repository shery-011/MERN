module.exports = {
    login: (req,res)=>{
       return res.send({
        message: "Logged In successfully"
       })
    },
    logout : (req,res)=>{
        return res.send({
            message: "Logged Out Successfully"
        })
    }
}