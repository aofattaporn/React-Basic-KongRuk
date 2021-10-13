import PropTypes from 'prop-types'; // ES6

// props destucturing
const Item = ({title, amonut})=>{ 
   
   return (
      // {variable}
   <li className="item"> {title} <span> {amonut} </span></li>
    )
}

// set type props
Item.prototypes = {
   title: PropTypes.string.isRequired, 
   amonut: PropTypes.number.isRequired
}

export default Item;