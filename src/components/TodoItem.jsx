import { useEffect, useState } from "react";
import Card from "./Card";
import { apiConnector } from "../services/apiConnector";
import { testing } from "../services/api";

const TodoItem = ()=>{
    const[data, setData] = useState([{}]);

    const fetchdata = async()=> {
        try{
            const data = await apiConnector('GET', testing.API_TEST);
            console.log("data is", data.data.data);
            setData(data.data.data);

        }catch(error)
        {
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchdata();
    },[]);
    return(
        <div className="w-[50%] h-[50%] flex flex-col items-center shadow-lg gap-6">
            <h1 className="bg-blue-500 w-[100%] text-center font-bold text-white text-4xl py-2">Todo List</h1>
            <div className="w-[70%] mt-5">
                <p className="bg-r opacity-40">Add a New Task</p>
                <form onSubmit={submitHandler} className="flex justify-between mt-1 text-xl">
                    <div className="flex flex-col gap-2">
                        <input placeholder="Enter Your Task"/>
                        {/* for makin a line  */}
                        <div className="h-[1px] w[60%] border bg-slate-500 border-black "></div>
                    </div>
                    <button className=" bg-blue-500 border rounded-md p-2 text-white ">Add Todo</button>
                </form>
            </div>
            <div className="flex flex-col gap-2 w-[70%] ">
                {
                    data.map((singleData, index)=> {
                        return <Card key={index} singleData= {singleData} />
                    })
                }
            </div>
        </div>
    )
}
export default TodoItem;