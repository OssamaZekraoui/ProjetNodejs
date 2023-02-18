import React from 'react'

function UserTab(props) {
    return (
        <tr style={{textAlign:'center'}}>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.password}</td>
        </tr>
    )
}

export default UserTab