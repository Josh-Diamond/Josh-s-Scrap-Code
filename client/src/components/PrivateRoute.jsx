import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({view: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )}
        />
    )
}

export default PrivateRoute;