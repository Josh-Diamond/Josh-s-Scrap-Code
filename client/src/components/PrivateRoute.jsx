import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({view: Component, pumps, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} pumps={pumps}  />
            ) : (
                <Redirect to='/' />
            )}
        />
    )
}

export default PrivateRoute;