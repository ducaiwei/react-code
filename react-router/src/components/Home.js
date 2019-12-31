import React, { useEffect } from 'react';
export default (props) => {
    useEffect(() => {
        setTimeout(() => {
            const { history } = props;
            console.log(history);
            history.push('/user');
        }, 3000)
    })
    return (
        <div>Home</div>
    )
}