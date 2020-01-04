import React, { useEffect } from 'react';
import { Link } from '../router'
export default (props) => {
    useEffect(() => {
    })
    return (
        <div>
            <p>Home</p>
            <Link to="/user">toUser</Link>
        </div>
    )
}