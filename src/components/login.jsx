import React from "react";
import { Row, Col, Card, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { loginWithEmail } from '../services/api'
const h3Style = {
    color: '#666666',
    fontSize: '24px',
    fontWeight: 600
}

const hrStyle = {
    marginTop: '2rem',
    marginBottom: '2rem',
    borderTop: '1px solid rgba(0,0,0,.1)'
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
    }

    loginSubmit = () => {
        console.log(this.email.current.state.value)
        loginWithEmail({email: this.email.current.state.value}).then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: "url(" + require("../imgs/bg.jpg") + ")" }}>
                <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col style={{ width: "500px" }}>
                        <Card style={{ borderRadius: "8px", boxShadow: "0 2px 18px -2px black" }}>
                            <div>
                                <h3 style={h3Style}>Ehome邮箱快捷登录</h3>
                            </div>
                            <hr style={hrStyle} />
                            <div>
                                <Input ref={this.email} size="large" placeholder="请输入邮箱" prefix={<UserOutlined />} style={{ marginBottom: '2rem' }} />
                            </div>
                            <div>
                                <Button type="primary" size="large" onClick={this.loginSubmit} block>
                                    登 录
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;