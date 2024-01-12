const Todo = require('../models/Todo');

exports.updateToDo = async(req, res) =>{
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
        )
        res.status(200).json(
            {
                message:"Updated succefully"
            }
        )
    }
    catch(err){
       console.log(err.message);
    }
}