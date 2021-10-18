
import { useState } from 'react';
import './FormComponent.css';
import { v4 as uuidv4 } from 'uuid';

const FormComponent=(props)=>{
   // set State by React hook
   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState(0);

   // curent title -> event -> set 
   const inputTitle = (event)=>{
      setTitle(event.target.value);
   }
   // curent nymber -> event -> set 
   const inputNumber=(event)=>{
      setAmount(event.target.value);
   }
   // save data event -> event
   const saveItem=(event)=>{
      event.preventDefault();
      // set itemData 
      const itemData = {
         id: uuidv4(),
         title: title, 
         amount: Number(amount)
      }

      // use props -> function onAddItem
      props.onAddItem(itemData);
      
      setTitle('');
      setAmount(0);
   
   }

   return(
      <div>
         <form onSubmit={saveItem}>
            {/* input titile name  */}
            <div className="from-comntrol">
               <label>ชื่อรายการ</label>
               <input type="text" placeholder="name" onChange={inputTitle} value={title}></input>
            </div>

            {/* input amount */}
            <div className="form-control">
               <label>จำนวนเงิน</label>
               <input type="number" placeholder="define money" onChange={inputNumber} value={amount}></input>
            </div>

            {/* // sumit */}
            <div>
               <button className='btn' type='submit'>add data</button>
            </div>
            
         </form>
      </div>
   )
}

export default FormComponent;