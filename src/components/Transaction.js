import './Transaction.css'
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';


const Transaction=()=>{
  const data = [
    {title: 400 ,amonut:"2000", key:uuidv4()},
    {title: "เงินเดือน",amonut:"500000", key:uuidv4()},
  ]

   return(

     <ul className="item-list">
       {
        //  Array Map
         data.map((element)=>{
          //  return <Item title={element.title} amonut={element.amonut} key={uuidv4()} />
           return <Item {...element} key={uuidv4()} />
         })
       }
    </ul>
   )
 }

 export default Transaction;