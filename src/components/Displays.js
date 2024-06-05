import {useState} from "react"
import Updtform from "./Updtform";
import DelElement from "./DelElement";
function Displays(props){
    let arr = props.pasare;

    let [updt,setUpdt] = useState(false);
    let [val1,setVal1] = useState({});

    function funClick(x){
        setUpdt(!updt)
        setVal1(x);
    }
    function getupdval(newval){
        props.getupval(newval);
        console.log(newval.prodPrice);
    }
    function getdelval(newdel){
        props.getdels(newdel);
    }
    
    return(
        <div>
                <table>
                    <tr>
                        <td>Index</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    </table>
        {
            arr.map((ele,i) => (

                    <tr onClick={()=>{funClick(ele)}}>
                        <td>{i}</td>
                        <td>{ele.prodName}</td>
                        <td>{ele.prodPrice}</td>
                    </tr>
            ))
        }
        
        {
            updt && <Updtform updtval={val1} getupdval={getupdval}/>
        }
        {
            updt && <DelElement updtval={val1} getdelval={getdelval}/> 
        }
        </div>
    )
}
export default Displays;