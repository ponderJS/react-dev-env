import React from 'react';


class Login extends React.Component {
    render() {
        return (
            <div>
                <div><input placeholder="用户名" /></div>
                <div><input placeholder="密码" type="password" /></div>
            </div>
        );
    }
}

export default Login;
