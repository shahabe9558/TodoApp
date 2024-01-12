
const Todo = require('../models/Todo');

exports.createTodo = async(req, res)=>{
    try{
        // extract the description and tittle from req body 
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        res.status(200).json(
            {
                success: true,
                data:response,
                message:"Entry created successfully",
            }
        )
    }
    catch(err){
        console.log(err.message);
        res.status(500).json(
            {
                success:false,
                message:"Error while creating in db",
            }
        )
    }
}