import './Transaction.css'
import Item from './Item';

const Transaction=(props)=>{

  const {items} = props;

   return(
     <div>
      <ul className="item-list">
        {
          //  Array Map
          items.map((element)=>{
            return <Item key={element.id} {...element} />
          })
        }
      </ul>
    </div>
   )
 }

 export default Transaction;