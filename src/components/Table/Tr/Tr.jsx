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
// 0: uint256: id 2
// 1: string: name Миша
// 2: uint256: totalVotes 1

// <tr>
//  <td>0</td>
//  <td>Рома</td>
//  <td id="candidate-1"></td>
// </tr>
export default Tr;