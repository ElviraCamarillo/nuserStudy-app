import React, { useEffect } from 'react'
function Logout (props) {
    console.log(props)
    const { replace } = props.history
    useEffect(() => {
        window.localStorage.removeItem('tokenapp')
        props.history.replace('/login')
    }, [replace])
    return (
        <div />
    )
}
export default Logout