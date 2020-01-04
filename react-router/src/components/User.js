import React, { useState } from 'react';
import { Link } from '../router'
import UserComponent from './UserComponent';

export default (props) => {
    const [user, setUser] = useState({ id: 1, name: 'nelson', age: '10' })
    setTimeout(() => {
        setUser({
            name: 'nelson',
            age: '20'
        })
    }, 3000)
    return (
        <div>
            <UserComponent user={user} />
        </div>
    )
}