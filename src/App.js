// import logo from './logo.svg';
import './App.css';
import Transaction from "./components/Transaction"


const Titile = () => <h1 style={{color:"red", textAlign:"center"}}>program callculate</h1>
const Description = ()=><p style={{color:"red", textAlign:"center"}}>บันทึกข้อมูลบัฐชีในแต่ละวัน</p>


function App() {
  return (
    <div>
      {/* nested-component */}
      <Titile/>
      <Description/>
      <Transaction/>
    </div>
  );
}

export default App;
