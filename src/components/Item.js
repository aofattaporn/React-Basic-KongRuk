import PropTypes from 'prop-types'; // ES6

// props destucturing
const Item = (props)=>{ 
   const {title, amount} = props;

   return (
   // {variable}
   <li> {title}<span>{amount}</span></li>

   )
}

// set type props
Item.prototypes = {
   title: PropTypes.string.isRequired, 
   amount: PropTypes.number.isRequired
}

export default Item;