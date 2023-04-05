
import React, { useState, useEffect } from 'react';
import { data } from '../../utils/data';
import TableSection from './TableSection';
import './table.css'

export default function TablePropertiesData() {
    const [datas, setData] = useState(data);



    return (
        <>
            <table>
                <thead>
                    <td>
                    </td>
                    <th>CITY</th>
                    <th>PHONE NUMBER</th>
                    <th>SOURCE</th>
                    <th>ATTRIBUTE</th>
                    <th>CASE ID</th>
                    <th>LOCATION</th>
                    <th>MATCHES%</th>
                    <td>

                    </td>
                </thead>
            </table>
            <table>
              
                {datas.map((propertiesDetails, index) => (
                    <TableSection propertiesDetails={propertiesDetails} index={index}/>
                ))}
        </table>
        
        </>
    );
}
