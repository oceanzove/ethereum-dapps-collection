import React from "react";

const Tr = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.totalVotes}</td>
        </tr>
    )
}
export default Tr;