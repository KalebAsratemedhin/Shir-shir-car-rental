const express = require('express')
const bcrypt = require('bcryptjs');

const cors = require('cors')
const bodyParser = require('body-parser');
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    exposedHeaders: ['Content-Type'],
  }

const app = express()

const jwt = require('jsonwebtoken')
app.use(cors(corsOptions))


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
const User = require('./models/user')

// const mongoURI = 'mongodb+srv://kirubelassefa386:slide7464@cluster0.x2tde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoURI = 'mongodb://localhost:27017/ShirShir'
 
const connectToDB = async() => {
    try {
        console.log("tyr connect ") 
        await mongoose.connect(mongoURI, {dbName:"CarRentDB"});
        console.log("Mongo db connected")
    } catch (error) {
        console.log(`Database connection failed. Error ${error}`)
    }
     
}




app.get("/kiru", (req, res, next) => { 
    res.send("hello response"); 
})  

app.post('/signup', async(req, res) => {
    console.log("Headers:", req.headers);
    console.log("signup request body ", req.body);
    try {

        if(!req.body.username || !req.body.password || !req.body.email){
            return res.status(400).json({message: 'Invalid format'})
        }
        const {username, password, email} = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        console.log("hashed password", hashedPassword)

        const duplicate = await User.findOne({
            username
        })

        if(duplicate){
            return res.status(400).json({message: "Username is taken."})
        }
        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        })

        console.log("new user ", newUser)

        const token = jwt.sign({username}, "jdfqslthiogdfhslvqfoachzvlshl", {

            expiresIn: '2h'
        })
 
        const user = await (await newUser).toObject




        res.status(201).json({message: "User created successfully", data: user.toObject() , accessToken: token})

        
    } catch (error) {
        res.status(500).json({message: "Internal server error."})
        
    }

})


app.post('/signin', async(req, res) => {
    console.log("signin request body ", req.body)
    try {

        if(!req.body.username || !req.body.password ){
            return res.status(400).json({message: 'Invalid format'})
        }
        const {username, password} = req.body
        const user = await User.findOne({
            username: username
        })

        console.log("user", user)

        if(!user){
            return res.status(404).json({message: "The user is not found."})
        }

        await bcrypt.compare(password, user.password, (err, result) => {
            if(result){
                const token = jwt.sign({username}, "jdfqslthiogdfhslvqfoachzvlshl", {
                    expiresIn: '2h'
                })
                console.log('sign in success',{message: "Successfully signed in.", accessToken: token, data: user.toObject()  } )

                 return res.status(200).json({message: "Successfully signed in.", accessToken: token, data: user.toObject()  })
            } 
            if (err){
                return res.status(400).json({message: "Wrong password"})
            }
        })

        
        
    } catch (error) {
        res.status(500).json({message: "Internal server error."})
        
    }

})

const db = connectToDB()

module.exports = db






app.listen(5000, () => {
    console.log("Successfully running on port 5000")
})
