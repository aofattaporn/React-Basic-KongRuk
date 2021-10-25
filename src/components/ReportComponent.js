import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'


const ReportComponent =()=>{

   // when use useContext we will not  use Consumer 
   const {income, expense} = useContext(DataContext);

   return (
      <div>
         <h4>ยอดคงเหลือ (บาท) </h4>
         <h1>{income - expense}</h1>
         <div className="report-container">
            <div>
               <h4>ยอดรายรับ</h4>
               <p className = "report plus"> { income }</p>
            </div>
            <div>
               <h4>ยอดรายจ่าย</h4>
               <p className = "report minus"> { expense }</p>
            </div>

         </div>
      </div>
   )
}

export default ReportComponent;