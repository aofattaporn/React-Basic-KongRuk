// import logo from './logo.svg';
import './App.css';
import FromComponent from "./components/FromComponent"
import Transaction from "./components/Transaction"
const Description = ()=><p style={{color:"black", textAlign:"center", border:"solid"}}>บันทึกข้อมูลบัฐชีในแต่ละวัน</p>

function App() {
  return (
    <div className='container'>
      {/* nested-component */}
      <Description/>
      <FromComponent/>
      <Transaction/>
    </div>
  );
}

export default App;
