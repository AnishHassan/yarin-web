import React from "react";

const TableRow = ({ propertiesDetails }) => {
    return (
        <tr>
            <td>
                <b>{propertiesDetails.id}.</b> 
            </td>
            <td>
                {propertiesDetails.city}
            </td>
            <td>
                {propertiesDetails.phoneNumber}
            </td>
            <td>
                {propertiesDetails.source}
            </td>
            <td>
                <div>
                    <p> AccuracyRate: {propertiesDetails.attributes.AccuracyRate}</p>
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
                        <p>{item.name} - {item.referenceId}</p>
                        <p>{item.percentage} - {item.url}</p>
                    </div>
                ))}
            </td>
        </tr>
    )
}

export default TableRow