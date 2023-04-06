import React from "react";
import ExpandableButton from './ExpandableButton';
const TableRow = ({ propertiesDetails,isOpen,toggle }) => {
    return (
        <tr style={{background:"rgb(27, 26, 58)"}} className="active">
            <td>
                <b>{propertiesDetails.id}.</b> 
            </td>
            <td>
                {propertiesDetails.city}
            </td>
            <td style={{width:"13rem"}}>
                {propertiesDetails.phoneNumber}
            </td>
            <td>
                {propertiesDetails.source}
            </td>
            <td>
                <div>
                    <p style={{marginTop:"0px"}}> AccuracyRate: {propertiesDetails.attributes.AccuracyRate}</p>
                    <p>Category: {propertiesDetails.attributes.Category}</p>
                </div>
            </td>

            <td>
                ${propertiesDetails.caseId}
            </td>
            <td>
                {propertiesDetails.location}
            </td>
            <td>
                {propertiesDetails.matches.map((item) => (
                    <div>
                        <p style={{marginTop:"0px"}}>{item.name} - {item.referenceId}</p>
                        <p>{item.percentage} - {item.url}</p>
                    </div>
                ))}
            </td>
            <td className='button-td'>
                      <ExpandableButton isOpen={isOpen} toggle={toggle} />
                  </td>
        </tr>
    )
}

export default TableRow