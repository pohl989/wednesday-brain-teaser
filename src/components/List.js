import React from 'react';


const List = ({list}) => (
  <div>
    <ul>
        { list.map( single => 
          <li>
          {single}
          </li>
        )}
    </ul>
</div>
 )


export default List
