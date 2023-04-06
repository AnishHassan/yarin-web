import React, { useState, useEffect } from 'react';
import ExpandableButton from './ExpandableButton';
import useOpenController from './Hooks/UseOpenController';
import TableRow from './TableRow';

const TableSection = ({ propertiesDetails, index }) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
          {isOpen ==false &&
                  <tr style={{background:"#D9D9D9"}}>
                  <td >
                  {propertiesDetails.id}. 
                 </td>
                  <td>
                      xxxxxx
                  </td>
                  <td>
                      xxxxxxxxxxx
                  </td>
                  <td>
                      xxxxxxxxx
                  </td>
                  <td>
                      xxxxxxxxxx
                  </td>
                  <td>
                      xxxxxxxxx
                  </td>
                  <td>
                      xxxxxxxxxxx
                  </td>
                  <td>
                      xxxxxxxx
                  </td>
                  <td className='button-td'>
                      <ExpandableButton isOpen={isOpen} toggle={toggle} />
                  </td>

              </tr>
                }
              
                {isOpen && <TableRow propertiesDetails={propertiesDetails} isOpen={isOpen} toggle={toggle}/>}
          

        </>
    );
}


export default TableSection