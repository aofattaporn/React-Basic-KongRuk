import './Transaction.css'
import Item from './Item';

const Transaction=(props)=>{

  const {items} = props;

   return(
     <ul className="item-list">
       {
        //  Array Map
         items.map((element)=>{
          return <Item key={element} {...element} />
         })
       }

    </ul>
   )
 }

 export default Transaction;