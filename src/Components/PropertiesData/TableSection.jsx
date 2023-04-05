import React, { useState, useEffect } from 'react';
import ExpandableButton from './ExpandableButton';
import useOpenController from './Hooks/UseOpenController';
import TableRow from './TableRow';

const TableSection = ({ propertiesDetails, index }) => {

    const { isOpen, toggle } = useOpenController(false);

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        
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
                {isOpen && <TableRow propertiesDetails={propertiesDetails} />}
            </tbody>

        </>
    );
}


export default TableSection