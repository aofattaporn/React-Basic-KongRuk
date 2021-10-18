// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Description from './components/Description';
import FormComponent from "./components/FromComponent"
import Transaction from "./components/Transaction"


// const Description = ()=><p style={{color:"black", textAlign:"center", border:"solid", backgroundColor:"antiquewhite"}}>บันทึกข้อมูลบัฐชีในแต่ละวัน</p>

function App() {

  // initial data
  const initData = [];

  // use state set state items
  const [items, setItems] = useState(initData);
  
  const onAddNewItem = (newItem)=>{
        
        setItems((prevItem) => {
        return[newItem,...prevItem]
      });
  }

  return (
    <div className='container'>

      <Description/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/>

    </div>
  );
}

export default App;
