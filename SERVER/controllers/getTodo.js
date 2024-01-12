const Todo = require("../models/Todo");

exports.getToDo = async(req, res)=>{
    // fetch the data from  Todo object from databaase 
    try{
        // console.log("This fun is called");
        const response = await Todo.find({});
        // const response = await Todo.findOne({});
        // const response = await Todo.findById('65995f0eeaced84e3859585e');
        res.status(200).json(
            {
                success :true,
                data: response,
                message:"Data fetched successfully",
            }
        )
    }
    catch(err){
        console.log("Error while fetchin ght data from databse");
        console.log(err.message);
    }
}

exports.getbyId = async(req, res)=> {
    try{
        const id = req.params.id;
        const fetchedData = await Todo.findById({_id : id});
        // means data not dound 
        if(!fetchedData){
            res.status(500).json(
                {
                    success:false,
                    message:"Data not found for given id",
                }
            )
        }else{
            res.status(200).json(
                {
                    success:true,
                    data: fetchedData,
                    message:"Data fetched aasani se",
                }
            )
        }
    }
    catch(err){
        res.status(500).json(
            {
                success:false,
                message: err.message,
            }
        )

    }
}