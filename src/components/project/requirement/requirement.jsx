import React from "react";
import { Drawer, Form, Col, Row, Input, Select, Card, Table, Button, Tag, Space } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
const { Option } = Select;


class Requirement extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            requirementFormDisabled: {
                type: true,
                name: true,
                level: true,
                module: true,
                origin: true,
                platform: true,
                introducer: true,
                version: true,
                remarks: true,
                userStory: true
            },
            requirementFormData: {
                type: '1',
                name: '1',
                level: '1',
                module: '1',
                origin: '1',
                platform: '1',
                introducer: '1',
                version: '1',
                remarks: '1',
                userStory: '1'
            }
        }
    }

    disabledForm = (boolean) => {
        let requirementFormDisabled = {}
        Object.keys(this.state.requirementFormDisabled).map(key => {
            requirementFormDisabled[key] = boolean
        })
        return requirementFormDisabled
    }

    showDrawer = (opt, num) => {
        if (opt === "detail") {
            this.setState({
                requirementFormDisabled: this.disabledForm(true)
            });

            this.formRef.current.setFieldsValue({
                type: '1',
                name: '1',
                level: '1',
                module: '1',
                origin: '1',
                platform: '1',
                introducer: '1',
                version: '1',
                remarks: '1',
                userStory: '1'
            })
        }
        else if (opt === "add") {
            console.log(this.formRef)
            this.setState({
                requirementFormDisabled: this.disabledForm(false)
            });
            this.formRef.current.setFieldsValue({
                type: '',
                name: '',
                level: '',
                module: '',
                origin: '',
                platform: '',
                introducer: '',
                version: '',
                remarks: '',
                userStory: ''
            })
        }
        else if (opt === "edit") {
            this.setState({
                requirementFormDisabled: this.disabledForm(false)
            });
        }
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const columns = [
            {
                title: '需求编号',
                dataIndex: 'id',
                key: 'id',
                width: 100,
                fixed: 'left',
                align: 'center',
                render: text => <a>{text}</a>,
            },
            {
                title: '需求类型',
                dataIndex: 'milestone',
                key: 'milestone',
                align: 'center',
                ellipsis: true,
                width: 150,
            },
            {
                title: '需求名称',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                ellipsis: true,
                width: 150,
                render: text => <a onClick={this.showDrawer.bind(this, 'detail', '1')}>{text}</a>,
            },
            {
                title: '功能模块',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                width: 150,
                ellipsis: true,
            },
            {
                title: '用户故事',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                width: 150,
                ellipsis: true,
            },
            {
                title: '优先级',
                dataIndex: 'level',
                key: 'level',
                align: 'center',
                width: 100,
            },
            {
                title: '需求来源',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                ellipsis: true,
                width: 150,
            },
            {
                title: '所属端',
                dataIndex: 'deadline',
                key: 'deadline',
                ellipsis: true,
                align: 'center',
                width: 150,
            },
            {
                title: '提出人',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                width: 150,
                ellipsis: true,
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                width: 100,
                render: text => {
                    let color = text === 1 ? 'geekblue' : 'volcano';
                    let show_text = text === 1 ? '已收录' : '未收录';
                    return (
                        <Tag color={color} key={text}>
                            {show_text}
                        </Tag>
                    );
                }
            },
            {
                title: '收录版本',
                dataIndex: 'deadline',
                key: 'deadline',
                align: 'center',
                width: 150,
                ellipsis: true,
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                key: 'create_time',
                align: 'center',
                width: 150,
            },
            {
                title: '备注',
                dataIndex: 'deadline',
                key: 'deadline',
                ellipsis: true,
                align: 'center',
                width: 150,
            }
        ];
        const data = [
            {
                key: '1',
                milestone: 'John Brown',
                id: 32,
                deadline: 'New York No. 1 Lake Park',
                create_time: '2020-10-14 12:00:00',
                level: '高',
                status: 1
            },
            {
                key: '2',
                milestone: 'Jim Green',
                id: 42,
                deadline: 'London No. 1 Lake Park',
                create_time: '2020-10-14 12:00:00',
                level: '中',
                status: 1
            },
            {
                key: '3',
                milestone: 'Joe Black',
                id: 32,
                deadline: 'Sidney No. 1 Lake Park',
                create_time: '2020-10-14 12:00:00',
                level: '低',
                status: 0
            },
        ];
        const rowSelection = {
        };
        return (
            <div id="div_main_wrapper_container" >
                <div id="div_main_wrapper" className="smart-scrollbar" style={{ height: 'calc(100vh - 43px)' }}>
                    <Card
                        title="云游戏项目协同工作"
                        bordered={false}
                        size='small'
                        style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))', marginTop: '10px' }}
                        headStyle={{ textAlign: 'center', borderBottomColor: 'rgba(20,81,154,0.5)', fontWeight: '600', fontSize: '14px', color: '#666' }}
                    >
                        {/* <Space align="center">
                            所属端:
                            <Select style={{ width: 120 }}>
                                <Option value="0" selected>全部</Option>
                                <Option value="1">IOS</Option>
                                <Option value="2">安卓</Option>
                            </Select>
                        </Space>

                        <Button onClick={this.handleAdd} type="primary" icon={<SyncOutlined />} style={{ marginBottom: 16, float: "right" }}>
                            刷 新
                        </Button>
                        <Button onClick={this.showDrawer.bind(this, 'add', null)} type="primary" icon={<PlusOutlined />} style={{ marginBottom: 16, marginRight: 16, float: "right" }}>
                            新 建
                        </Button> */}
                        <ProTable
                            rowSelection={{}}
                            headerTitle="批量操作"
                            columns={columns}
                            dataSource={data}
                            scroll={{ x: 1500 }}
                            // size='small'
                            search={false}
                            toolBarRender={() => [
                                <Button key="show">查看日志</Button>,
                                <Button key="out">
                                  导出数据
                                </Button>,
                                <Button type="primary" key="primary">
                                  创建应用
                                </Button>,
                              ]}
                            tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
                                <Space size={24}>
                                    <span>
                                        已选 {selectedRowKeys.length} 项
                                    <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
                                            取消选择
                                    </a>
                                    </span>
                                    <span>{`容器数量: ${selectedRows.reduce(
                                        (pre, item) => pre + item.containers,
                                        0,
                                    )} 个`}</span>
                                    <span>{`调用量: ${selectedRows.reduce(
                                        (pre, item) => pre + item.callNumber,
                                        0,
                                    )} 次`}</span>
                                </Space>
                            )}
                        />
                        <Drawer
                            title="新建需求"
                            style={{ paddingTop: '42px' }}
                            width={720}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            maskClosable={false}
                            forceRender={true}
                        >
                            <Form
                                ref={this.formRef}
                                layout="vertical"
                                hideRequiredMark
                            >
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="type"
                                            label="需求类型"
                                            rules={[{ required: true, message: '请选择需求类型' }]}
                                        >
                                            <Select
                                                placeholder="请选择需求类型"
                                                disabled={this.state.requirementFormDisabled.type}
                                            >
                                                <Option value="1">新增功能</Option>
                                                <Option value="2">功能改进</Option>
                                                <Option value="3">需求变更</Option>
                                                <Option value="4">界面优化</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="name"
                                            label="需求名称"
                                            rules={[{ required: true, message: '请输入需求名称' }]}
                                        >
                                            <Input
                                                placeholder="请输入需求名称"
                                                disabled={this.state.requirementFormDisabled.name}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="module"
                                            label="功能模块"
                                            rules={[{ required: true, message: '请选择功能模块' }]}
                                        >
                                            <Select
                                                placeholder="请选择功能模块"
                                                disabled={this.state.requirementFormDisabled.module}
                                            >
                                                <Option value="1">官网模块</Option>
                                                <Option value="2">游戏页面</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="level"
                                            label="优先级"
                                            rules={[{ required: true, message: '请选择优先级' }]}
                                        >
                                            <Select
                                                placeholder="请选择优先级"
                                                disabled={this.state.requirementFormDisabled.level}
                                            >
                                                <Option value="1">高</Option>
                                                <Option value="2">中</Option>
                                                <Option value="3">低</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="origin"
                                            label="需求来源"
                                            rules={[{ required: true, message: '请选择需求来源' }]}
                                        >
                                            <Select
                                                placeholder="请选择需求来源"
                                                disabled={this.state.requirementFormDisabled.origin}
                                            >
                                                <Option value="1">Jack Ma</Option>
                                                <Option value="2">Tom Liu</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="platform"
                                            label="所属端"
                                            rules={[{ required: true, message: '请选择所属端' }]}
                                        >
                                            <Select
                                                placeholder="请选择所属端"
                                                disabled={this.state.requirementFormDisabled.platform}
                                            >
                                                <Option value="1">Jack Ma</Option>
                                                <Option value="2">Tom Liu</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="introducer"
                                            label="提出人"
                                            rules={[{ required: true, message: '请选择提出人' }]}
                                        >
                                            <Select
                                                placeholder="请选择提出人"
                                                disabled={this.state.requirementFormDisabled.introducer}
                                            >
                                                <Option value="1">Jack Ma</Option>
                                                <Option value="2">Tom Liu</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="version"
                                            label="收录版本"
                                            rules={[{ required: true, message: '请选择收录版本' }]}
                                        >
                                            <Select
                                                placeholder="请选择收录版本"
                                                disabled={this.state.requirementFormDisabled.version}
                                            >
                                                <Option value="1">Jack Ma</Option>
                                                <Option value="2">Tom Liu</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item
                                            name="userStory"
                                            label="用户故事"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入用户故事',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea
                                                rows={4}
                                                placeholder="请输入用户故事"
                                                disabled={this.state.requirementFormDisabled.userStory}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={24}>
                                        <Form.Item
                                            name="remarks"
                                            label="备注"
                                            rules={[{ required: true, message: '请输入备注' }]}
                                        >
                                            <Input
                                                placeholder="请输入备注"
                                                disabled={this.state.requirementFormDisabled.remarks}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Drawer>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Requirement;