import {useState} from "react";
function Farms(props){

    let [txt1,setTxt1] = useState();
    let [txt2,setTxt2] = useState();

    function txtchange(event){
        setTxt1(event.currentTarget.value);
    }

    function pricechange(event){
        setTxt2(event.currentTarget.value);
    }

    function funInsert(event){
        event.preventDefault(); 
        let obj = {prodName:txt1,prodPrice:txt2};
        props.getobj(obj);
    }

    return(
        <div>
            <form>
                <input type="text" onChange={txtchange} placeholder="productName"></input><br></br>
                <input type="text" onChange={pricechange}  placeholder="productPrice"></input><br></br>
                <input type="submit" value="insert" onClick={funInsert}></input>
            </form>
        </div>
    )
}
export default Farms;