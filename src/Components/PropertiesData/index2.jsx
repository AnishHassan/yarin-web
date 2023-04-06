
import React, { useState, useEffect } from 'react';
import { data } from '../../utils/data';
import TableSection from './TableSection';
import './table.css'

export default function TablePropertiesData() {
    const [datas, setData] = useState(data);

console.log(datas)

    return (
        <>
      
            <table>
                <thead>
               <tr>
               <th></th>
                    <th>CITY</th>
                    <th>PHONE NUMBER</th>
                    <th>SOURCE</th>
                    <th>ATTRIBUTE</th>
                    <th>CASE ID</th>
                    <th>LOCATION</th>
                    <th>MATCHES%</th>
                    <th>

                    </th>
               </tr>
                </thead>
        <tbody>
        {datas.map((propertiesDetails, index) => (
                    <TableSection propertiesDetails={propertiesDetails} index={index}/>
                ))}
            </tbody>        
            </table>
        
        
        </>
    );
}
