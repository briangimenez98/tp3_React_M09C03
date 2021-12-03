import React from 'react';

const Tablerow = ({id,title,rating,awards,length}) => {
    return (
        <tr>
            <th>{id}</th>
            <th>{title}</th>
            <td>{rating}</td>
            <td>{awards}</td>
            <td>{length}</td>
        </tr>
    );
}

export default Tablerow;