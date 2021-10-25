import PropTypes from 'prop-types'; // ES6
import './Items.css'

// props destucturing
const Item = (props)=>{ 
   const { title, amount} = props;

   // check amount 
   const status = amount < 0 ? "expense" : "income"
   const symbol = amount < 0 ? "-" : "+"

   return (
   // {variable}
   <li className={status}> {title} {status}<span>{symbol} {Math.abs(amount)}</span>
   </li>

   )
}

// set type props
Item.prototypes = {
   title: PropTypes.string.isRequired, 
   amount: PropTypes.number.isRequired
}

export default Item;