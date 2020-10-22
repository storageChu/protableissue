import React from "react";
import { Drawer, Form, Col, Row, Input, Select, Card, Table, Button, Tag, Space } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { statisticsColumns, requirementColumns } from './constant';

const { Option } = Select;

const statisticsColumnsParam = statisticsColumns()

require
    (
        './display_board.css'
    );
class DisplayBoard extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        const data = [

        ];
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
                        <Row>
                            {statisticsColumnsParam.map((item, index) => {
                                return <Col sm={4} xs={24}>
                                    <div className="headerInfo">
                                        <span>{item.title}</span>
                                        <p>{item.text}</p>
                                        {item.board && <em />}
                                    </div>
                                </Col>
                            })
                            }
                        </Row>
                    </Card>
                    <Card
                        bordered={false}
                        size='small'
                        style={{ width: '100%', background: 'linear-gradient(180deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.9))', marginTop: '5px' }}
                    >
                        <Row>
                            <Table
                                columns={requirementColumns}
                                dataSource={data}
                                scroll={{ x: 1500 }}
                                size='small'
                                className='smart-scrollbar'
                            />
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

export default DisplayBoard;