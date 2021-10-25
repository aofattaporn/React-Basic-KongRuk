// import logo from './logo.svg';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Description from './components/Description';
import FormComponent from "./components/FromComponent"
import Transaction from "./components/Transaction"
import DataContext from './data/DataContext';
import ReportComponent from "./components/ReportComponent";


function App() {

  // initial data
  const initData = [];

  // use state set state items
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0); 
  const [reportExpense, setReportExpens] = useState(0); 

  // React Reducer 
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action)=>{
    switch(action.type){
      case "SHOW" :
        return setShowReport(true);
      case "HIDE" : 
        return setShowReport(false);
    }
  }
  const [result, dispatch] = useReducer(reducer, showReport);

  useEffect(()=>{
    // check income and expense all elements 
    const amount = items.map(items=>items.amount);
    const income = amount.filter(element=>element>0).reduce((total, element)=> total + element, 0);
    const expense = amount.filter(element=>element<0).reduce((total, element)=> total + element, 0)* -1;

    console.log("รายได้"+ income);
    console.log("รายได้"+ expense);

    setReportIncome(income);
    setReportExpens(expense);

  }, [items])

  // onaddNewItem 
  const onAddNewItem = (newItem)=>{
        
        setItems((prevItem) => {
        return[newItem,...prevItem]
      });
  }

  return (
    // use Context provider 
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense

        
      }
    } >

      <div className='container'>
        <Description/>
        {showReport && <ReportComponent/>}
        <div align="center">
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
        </div>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>

    </DataContext.Provider>

  );
}

export default App;
