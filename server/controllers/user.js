const User = require('../models/user')

const getCurrentUser =  async(req, res) => {
    try {
        console.log('req.', req.user)

        const {username} = req.user

        const user = await User.findOne({
            username
        })


        res.status(201).json({message: "User found.", data: user.toObject() })

        
    } catch (error) {
        res.status(500).json({message: "Internal server error."})
        
    }

}


// const updateUser =  async(req, res) => {
//     try {

//         if(!req.body.username || !req.body.password ){
//             return res.status(400).json({message: 'Invalid format'})
//         }
//         const {username, password} = req.body
//         const user = await User.findOne({
//             username: username
//         })

//         console.log("user", user)

//         if(!user){
//             return res.status(404).json({message: "The user is not found."})
//         }

//         await bcrypt.compare(password, user.password, (err, result) => {
//             if(result){
//                 const token = jwt.sign({username}, "jdfqslthiogdfhslvqfoachzvlshl", {
//                     expiresIn: '2h'
//                 })
//                 console.log('sign in success',{message: "Successfully signed in.", accessToken: token, data: user.toObject()  } )

//                  return res.status(200).json({message: "Successfully signed in.", accessToken: token, data: user.toObject()  })
//             } 
//             if (err){
//                 return res.status(400).json({message: "Wrong password"})
//             }
//         })

        
        
//     } catch (error) {
//         res.status(500).json({message: "Internal server error."})
        
//     }

// }

module.exports = {
    getCurrentUser,
    // updateUser
}