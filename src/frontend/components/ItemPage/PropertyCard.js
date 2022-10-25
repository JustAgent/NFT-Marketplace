import React from 'react'

const PropertyCard = ( {trait_type, value, trait_count} ) => {
    return ( 
        <div>
            {trait_count}
            {trait_type}
            {value}
        </div>
     );
}
 
export default PropertyCard;