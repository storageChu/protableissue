import React from "react";
import { Card, Table, Calendar, Descriptions, List } from 'antd';
require
    (
        './dashboard.css'
    );


class ProjectDashboard extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                align: 'center',
                render: text => <a>{text}</a>,
            },
            {
                title: '里程碑',
                dataIndex: 'milestone',
                key: 'milestone',
                align: 'center',
            },
            {
                title: 'deadline',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
            }
        ];
        const data = [
            {
                key: '1',
                milestone: 'John Brown',
                id: 32,
                deadline: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                milestone: 'Jim Green',
                id: 42,
                deadline: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                milestone: 'Joe Black',
                id: 32,
                deadline: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        const pagination = false
        const sidebarStyle = {
            transition: 'all .3s',
            display: 'block',
            visibility: 'visible',
            width: '300px',
            color: '#fff',
            zIndex: '1000',
            margin: '16px 20px 0 -100px',
            fontWeight: '300',
            background: 'rgba(0,0,0,.1)',
        }

        const dataList = [
            {
                title: '测试用例',
            },
            {
                title: '需求规格说明书',
            },
            {
                title: '概要设计说明书',
            },
            {
                title: '详细设计说明书',
            },
        ];
        return (
            <div data-v-2f199524="" id="div_main" className="lg-container">
                <nav data-v-343d009e="" data-v-2f199524="" id="entSidebar" className="nav-collapse collapse smart-scrollbar aside" style={sidebarStyle}>
                    <Card
                        title="日历"
                        bordered={false}
                        size='small'
                        style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                        headStyle={{ textAlign: 'center', borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                    >
                        <Calendar fullscreen={false} />
                    </Card>
                    <Card
                        title="常用文档&云盘"
                        bordered={false}
                        size='small'
                        style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))', marginTop: '13px' }}
                        headStyle={{ textAlign: 'center', borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                    >
                        <List
                            itemLayout="horizontal"
                            size='small'
                            dataSource={dataList}
                            split='false'
                            renderItem={item => (
                                <List.Item style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <a>{item.title}</a>
                                </List.Item>
                            )}
                        />
                    </Card>
                </nav>
                <div data-v-09530e20="" data-v-2f199524="" className="home-content centent">
                    <div data-v-09530e20="" className="page-wrapper">
                        <div data-v-09530e20="">
                            <div id="divOldMainContent" test_id="homePageOfPersonal">
                                <div className="boardlist-section my-board-section" id="myBoard">
                                    <div className="board-group  row js-my-board  ui-sortable ui-sortable-disabled collapse in" aria-expanded="true">
                                        <div style={{ width: 'calc(90% + 32px)', float: 'left', margin: '0 8px' }} className="board-card ui-sortable-handle" data-board_id="1298254" data-privileges="edit_board_content">
                                            <Card
                                                title="云游戏项目协同工作"
                                                bordered={false}
                                                size='small'
                                                style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                                headStyle={{ textAlign: 'center', borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                            >
                                                <Descriptions bordered column={{ xxl: 6, xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}>
                                                    <Descriptions.Item label="当前阶段" span={2}>提测阶段</Descriptions.Item>
                                                    <Descriptions.Item label="项目负责人" span={4}>郑灿灿</Descriptions.Item>
                                                    <Descriptions.Item label="项目开始时间" span={2}>2018-04-24 18:00:00</Descriptions.Item>
                                                    <Descriptions.Item label="计划完成时间" span={2}>2019-04-24 18:00:00</Descriptions.Item>
                                                    <Descriptions.Item label="剩余时间(天)" span={2}>10</Descriptions.Item>
                                                </Descriptions>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                                <div className="boardlist-section my-board-section" id="myMindmap">
                                    <div className="board-group  row js-my-board  ui-sortable ui-sortable-disabled collapse in" aria-expanded="true">
                                        <div style={{ width: 'calc(90% + 32px)', float: 'left', margin: '0 8px' }} className="board-card ui-sortable-handle" data-board_id="1298254" data-privileges="edit_board_content">
                                            <Card
                                                title="重要里程碑说明"
                                                bordered={false}
                                                size='small'
                                                style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                                headStyle={{ textAlign: 'center', borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                            >
                                                <Table
                                                    columns={columns}
                                                    dataSource={data}
                                                    pagination={pagination}
                                                    size='small'
                                                />
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                                <div className="boardlist-section my-board-section" id="myBoard">
                                    <div className="board-group  row js-my-board  ui-sortable ui-sortable-disabled collapse in" aria-expanded="true">
                                        <div className="lg-item board-card ui-sortable-handle" data-board_id="1298254" data-privileges="edit_board_content">
                                            <Card
                                                title="今日启动任务"
                                                bordered={false}
                                                size='small'
                                                style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                                headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                            >
                                                <Table
                                                    columns={columns}
                                                    dataSource={data}
                                                    pagination={pagination}
                                                    size='small'
                                                />
                                            </Card>
                                        </div>
                                        <div className="lg-item board-card ui-sortable-handle" data-board_id="1294124" data-privileges="edit_board_setting,edit_board_content">
                                            <Card
                                                title="今日完结任务"
                                                bordered={false}
                                                size='small'
                                                style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                                headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                            >
                                                <Table
                                                    columns={columns}
                                                    dataSource={data}
                                                    pagination={pagination}
                                                    size='small'
                                                />
                                            </Card>
                                        </div>
                                        <div className="lg-item board-card ui-sortable-handle" data-board_id="1294123" data-privileges="edit_board_setting,edit_board_content">
                                            <Card
                                                title="超时任务提醒"
                                                bordered={false}
                                                size='small'
                                                style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))' }}
                                                headStyle={{ borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                                            >
                                                <Table
                                                    columns={columns}
                                                    dataSource={data}
                                                    pagination={pagination}
                                                    size='small'
                                                />
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDashboard;