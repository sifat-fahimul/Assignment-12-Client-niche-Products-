import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = user;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;