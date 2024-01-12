const Todo = require('../models/Todo');

exports.deleteTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const response = await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success:true,
                message:"Deleted Successfully",
            }
        )
    }
    catch(err){
       console.log(err.message);
    }
}