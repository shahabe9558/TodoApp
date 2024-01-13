import { todoDelete } from "../services/api";
import { apiConnector } from "../services/apiConnector";
import { MdCancel } from "react-icons/md";


const Card = (props) =>{
    let singleData = props.singleData;
    
    const clickHandler = async()=>{
        let respone = await apiConnector("delete", todoDelete.TODO_DELETE);
    }

    return(
        <div className="flex flex-col gap-2 text-xl">
            <div className="flex justify-between">
                <p> {singleData.title} </p>
                <button onClick={clickHandler}>
                    <MdCancel/>
                </button>
            </div>
            {/* for making a line  */}
            <div className="h-[1px] w[60%] border bg-slate-500 border-black">

            </div>
        </div>
    )
}
export default Card;