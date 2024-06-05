import {useState,useEffect} from "react";
function Updtform(props){
    
    let [val1,setVal1] = useState();
    let [val2,setVal2] = useState();

    function funUpdate(){
        let obj = {prodName:val1,prodPrice:val2};
        setVal1("");
        setVal2("");
        props.getupdval(obj);
    }

    function priceChange(event){
        setVal2(event.currentTarget.value);
    }

    useEffect(()=>{
        setVal1(props.updtval.prodName);
        setVal2(props.updtval.prodPrice);
    },[props])

    return(
        <div>
            <form>
                <input type="text" defaultValue={val1} placeholder="updateName"></input><br></br>
                <input type="text" defaultValue={val2} placeholder="updatePrice" onChange={priceChange}></input><br></br>
                <input type="button" value="Update" onClick={funUpdate}></input>
            </form>
        </div>
    )
}
export default Updtform;