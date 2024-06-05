import Displays from "./components/Displays";
import "./App.css";
import {useState} from "react";
import Farms from "./components/Farms";

function App() {
  let arr = [{prodName:"apple",prodPrice:120},
  {prodName:"samsang",prodPrice:890},
  {prodName:"nokia",prodPrice:785}]

  let [add,setAdd] = useState(false);
  let [arr1,setArr1] = useState(arr);

  function funAdd(){
    setAdd(!add);
  }

  function getobj(newValue){
    setArr1([...arr1,newValue])
  }

  function getupval(newX){
    console.log("vitt"+newX.prodPrice);
    var newarr = arr1.map((ele) => {
      if(ele.prodName===newX.prodName){
        ele.prodPrice = newX.prodPrice;
        console.log("sucees"+newX.prodPrice);
      }
      return ele;
    })
    setArr1(newarr);
    }

    // function getdels(newdels){
    //   var newarr1 = arr1.map((e,i) => {
    //     if(e.prodName === newdels.prodName){
    //       arr1.splice(i,1);
    //     }
    //   })
    //   console.log(newdels.prodName);
    //   setArr1(newarr1);
    // }

    function getdels(newdels) {
      const newarr1 = arr1.filter((e) => e.prodName !== newdels.prodName);
      setArr1(newarr1);
    }
    


  return (
    <>
    <Displays pasare={arr1} getupval={getupval} getdels={getdels}/>
    <input type="button" value="AddNew" onClick={funAdd}></input>
    {
      add && <Farms getobj={getobj}/>
    }
    </>
  );
}

export default App;
