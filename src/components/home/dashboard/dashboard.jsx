import React from "react";
import { Card, List, Tag, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'
const h5Style = {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1.1'
}
const data = [
    {
        title: '1027',
    },
    {
        title: '10249',
    },
    {
        title: '2410',
    },
    {
        title: '4354',
    },
];
const product = [
    {
        title: '梧桐树DSSP管理后台',
    },
    {
        title: 'OLAP管理后台',
    },
    {
        title: '榕树BI管理后台',
    },
    {
        title: '看板示例-Sprint Backlog',
    },
    {
        title: '看板示例-Product Backlog',
    },
    {
        title: 'WEB项目管理',
    },
];
class Dashboard extends React.Component {
    render() {
        return (
            <Row>
                <Col span={4}>
                    <nav data-v-343d009e="" data-v-2f199524="" id="entSidebar" className="ent-sidebar nav-collapse collapse smart-scrollbar aside">
                        <ul data-v-343d009e="" className="side-nav">
                            <li data-v-2b9ac560="" className="panel" data-v-343d009e="">
                                <a data-v-2b9ac560="" href="javascript:void(0)" title="我的工作台" className="accordion-toggle">
                                    <i data-v-2b9ac560="" className="iconfont icon-person"></i>
                                    <span data-v-2b9ac560="" className="name elli">我的工作台</span>
                                </a>
                            </li>
                            <li data-v-2b9ac560="" className="panel" data-v-343d009e="">
                                <a data-v-2b9ac560="" href="javascript:void(0)" title="我的项目" className="accordion-toggle active">
                                    <i data-v-2b9ac560="" className="iconfont icon-product"></i>
                                    <span data-v-2b9ac560="" className="name elli">我的项目</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col span={20}>
                    <div style={{ padding: '15px' }}>
                        <Row gutter={8}>
                            <i className="iconfont icon-person" style={{ color: '#fff', margin: '3px 5px 0 5px', fontSize: '14px' }}></i>
                            <h5 style={{
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '1.1',
                                marginTop: '6px'
                            }}>我的工作台</h5>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Card
                                    title="今日任务"
                                    bordered={false}
                                    size='small'
                                    style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                    headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                >
                                    <List
                                        itemLayout="horizontal"
                                        size='small'
                                        dataSource={data}
                                        split='false'
                                        renderItem={item => (
                                            <List.Item style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <Tag color='volcano'>
                                                    紧急
                                                            </Tag>
                                                {item.title}&nbsp;&nbsp;
                                                <a>登录服务</a>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    title="负责的任务"
                                    bordered={false}
                                    size='small'
                                    style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                    headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                >
                                    <List
                                        itemLayout="horizontal"
                                        size='small'
                                        dataSource={data}
                                        split='false'
                                        renderItem={item => (
                                            <List.Item style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <Tag color='volcano'>
                                                    紧急
                                                            </Tag>
                                                {item.title}&nbsp;&nbsp;
                                                <a>登录服务</a>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    title="关注的任务"
                                    bordered={false}
                                    size='small'
                                    style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                    headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                >
                                    <List
                                        itemLayout="horizontal"
                                        size='small'
                                        dataSource={data}
                                        split='false'
                                        renderItem={item => (
                                            <List.Item style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <Tag color='volcano'>
                                                    紧急
                                                            </Tag>
                                                {item.title}&nbsp;&nbsp;
                                                <a>登录服务</a>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={8} style={{ marginTop: '15px' }}>
                            <i className="iconfont icon-product" style={{ color: '#fff', margin: '3px 5px 0 5px', fontSize: '14px' }}></i>
                            <h5 style={{
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '1.1',
                                marginTop: '6px'
                            }}>我的项目</h5>
                        </Row>
                        <Row gutter={8}>
                            {product.map((item, index) => {
                                return <Col span={8}>
                                    <Card
                                        style={{ margin: '10px 0', borderRadius: '4px', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                        bodyStyle={{ padding: '10px', height: '70px' }}
                                        hoverable={true}
                                    >
                                        <Row>
                                            <Col span={16}>
                                                <NavLink to="/product/1/dashboard" style={{ color: '#666', fontWeight: '600' }}>
                                                    {item.title}
                                                </NavLink>
                                            </Col>
                                            <Col span={8}></Col>
                                        </Row>
                                    </Card>
                                </Col>
                            })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Dashboard;