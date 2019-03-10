import React from 'react'

const TableBody = props => {
    const rows = props.friendsData.map((row, index) => {
        return (

            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.proximity}</td>
            </tr>

        );
    });
    return <tbody>{rows}</tbody>;
}
export default TableBody;