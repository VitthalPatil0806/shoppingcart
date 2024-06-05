import {useState,useEffect} from "react";
function DelElement(props){

    let [delname,setDelname] = useState();
    let [delprice,setDelprice] = useState();
    function funDelete(){
        let obj = {prodName:delname,prodPrice:delprice};
        props.getdelval(obj);
    }

    useEffect(()=>{
        setDelname(props.updtval.prodName);
        setDelprice(props.updtval.prodPrice);
    },[props])

    return(
        <div>
            <input type="button" value="delete" onClick={funDelete}></input>
        </div>
    )
}
export default DelElement;