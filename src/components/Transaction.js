import './Transaction.css'

const Item = ()=>{
   // dynamices data
   const name = "พักโรงแรม";
   const amout = 5000;

   return (
   <li className="item">{name} <span>-{amout}</span></li>
   )
}

const Transaction=()=>{
   return(
     <ul className="item-list">
       <Item/>
       <Item/>
    </ul>
   )
 }

 export default Transaction;