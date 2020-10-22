import React from "react";
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'

class NavTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKeys: 'dashboard',
            myAccountDropdown: this.props.myAccountDropdown
        }
    }


	componentWillReceiveProps(props) {
		this.setState({myAccountDropdown: props.myAccountDropdown});
    }
    

    handleMenuClick = (e) => {
        console.log(this.props.history)
        this.setState({
            selectedKeys: e.key
        });

        this.props.history.push('/product/' + this.props.history.location.pathname.split("/", 3)[2] + '/' + e.key)
    }

    switchMyAccountDropdown = () => {
        this.setState({
            myAccountDropdown: !this.state.myAccountDropdown,
        });
    };

    render() {
        return (
            <div id="main_navbar">
                <nav className="navbar">
                    <div>
                        <div className="navbar-header">
                            <NavLink to="/dashboard" className="navbar-brand">
                                <img className="navbar-logo" title="返回首页" alt="Leangoo" src="https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png" />
                            </NavLink>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            {/* <ul className="nav navbar-nav">
                                <li id="divSearchBoard" className="">
                                    <div className="nav-search">
                                        <input id="txtSearchBoard_inBoardListPage" type="text" maxLength="20" className="form-control input-sm" style={{ width: '200px', backgroundColor: 'rgba(255, 255, 255, 0.3)', paddingRight: '40px' }} />
                                        <span className="fa fa-search form-control-feedback icon" aria-hidden="true" onClick="searchInBoardList();"></span>
                                    </div>
                                </li>
                            </ul> */}
                            <div className="btn-group hidden navbar-middle-ent navbar-center">
                                {true &&
                                    <Menu
                                        onClick={this.handleMenuClick.bind(this)}
                                        mode="horizontal"
                                        selectedKeys={[this.state.selectedKeys]}
                                        style={{ fontSize: '17px', background: 'transparent', color: '#fff', lineHeight: '40px', borderBottom: 'unset' }}
                                    >
                                        <Menu.Item key="dashboard" style={{ padding: '0 15px', margin: '0px' }}>项目概览</Menu.Item>
                                        <Menu.Item key="requirement" style={{ padding: '0 15px', margin: '0px' }}>需求池</Menu.Item>
                                        <Menu.Item key="displayboard" style={{ padding: '0 15px', margin: '0px' }}>进度看板</Menu.Item>
                                        <Menu.Item key="alipay" style={{ padding: '0 15px', margin: '0px' }}>看板归档</Menu.Item>
                                    </Menu>
                                }
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <button id="create_board_btn" type="button" title="新建" className="btn navbar-btn hidden-xs">
                                        <span style={{ fontSize: 'inherit' }} className="iconfont icon-plus"></span>
                                        <span className="badge-notice hidden"></span>
                                    </button>
                                </li>
                                <li className="dropdown btn-group div-board-navigation">
                                    <button type="button" className="btn navbar-btn dropdown-toggle js-toggle-board-nav">
                                        看板导航									<span className="caret"></span>
                                    </button>
                                    <div id="board_nav_dropdown" className="panel panel-default nav_dropdown first-nav-dropdown-top hidden">
                                        <div className="panel-heading">看板导航
                                        <button type="button" className="close close-in-panel-heading" onClick="closeCurrentPopup(this)">×</button>
                                        </div>
                                        <div className="panel-body smart-scrollbar" style={{ maxHeight: '903px' }}>
                                            <input id="txtSearchBoard_inBoardNavDropdown" className="form-control" required="required" autoFocus placeholder="输入看板名称进行过滤..." data-i18n="[placeholder]board_nav.filter_placeholder" />
                                            <div id="divBoardsInNav"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className={`dropdown ${this.state.myAccountDropdown?"open":null}`}>
                                    <button onClick={this.switchMyAccountDropdown} type="button" className="btn navbar-btn dropdown-toggle me_style">
                                        <span className="avatar_position">
                                            <img className="member-avatar" src="https://www.leangoo.com/kanban/avatar/149/14937244111a13667610b10eedb505de27a6f2.png" alt="储备181522433@qq.com" />
                                        </span>
                                        <span id="nav_user_name" className="hidden-xs elli">储备</span>
                                    </button>
                                    <ul className="dropdown-menu first-nav-dropdown-top me-dropdown" role="menu" aria-labelledby="me">
                                        <li className="hidden-xs">
                                            <a href="#" data-i18n="board_nav.account.center" onClick="openUrl('https://www.leangoo.com/kanban/profile/go');">个人中心</a>
                                        </li>
                                        <li className="hidden-xs">
                                            <a href="#" className="js-setting-background" data-i18n="board_nav.account.background">设置背景</a>
                                        </li>										
                                        <li className="divider"></li>
                                        <li><a href="https://www.leangoo.com/kanban/login/logout" data-i18n="logout">退出</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <button id="prompt_nav" type="button" data-toggle="dropdown" className="btn navbar-btn hidden-xs dropdown-toggle " title="通知">
                                        <i style={{ fontSize: 'inherit' }} className="iconfont icon-message"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="divCreateBoard" className="panel panel-default hidden">
                    <div className="panel-heading">
                        <i className="fa fa-long-arrow-left arrow-left fa-lg js-back-to-panel"></i>
                        <span className="text-center title"></span>
                        <button type="button" className="close close-in-panel-heading" onClick="closeCurrentPopup(this)">×</button>
                    </div>
                    <div className="panel-body">
                        <ul className="pop-ul ul-one">
                            <li>
                                <a className="js-new-board" href="#">
                                    <span data-i18n="board.create_new_board2">新建看板...</span>
                                    <span className="name-explan" data-i18n="board.create_board_explain">一个看板包括多个列表，每个列表包括多张任务卡片。看板成员共享看板信息，以实现团队实时协作。</span>
                                </a>
                            </li>
                            <li>
                                <a className="js-new-project " href="#">
                                    <span data-i18n="project.create_new_project2">新建项目...</span>
                                    <span className="name-explan" data-i18n="project.create_project_explain">一个项目包括多名项目成员和多个看板。通过创建项目来管理项目需求、任务、问题、缺陷和测试场景等内容，并跟踪项目进展。</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="NotificationPopover" className="panel panel-default hidden nav_dropdown smart-scrollbar">
                    <div className="panel-heading"><span className="text-center center-block " data-i18n="board_nav.notification">通知</span>
                        <button type="button" className="close close-in-panel-heading" onClick="closeCurrentPopup(this)">×</button>
                    </div>
                    <div id="NotificationShortContent" className="panel-body smart-scrollbar">
                        <div className="one_notification" data-id="149361">
                            <div className="operator">
                                <img className="operator_avator" data-email="1157786006@qq.com" title="szt 1157786006@qq.com" src="https://www.leangoo.com/kanban/avatar/149/149361483d972b5ae32497d7c7946258469a8f.jpeg" alt="" />
                            </div>
                            <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/8453c142ead3d061" data-task_id="8453c142ead3d061">易乐玩联运SDKAndroid2.3.4统计功能测试</a>&nbsp;卡片上</div>
                            <small className="text-right center-block text-muted">2017-07-05 10:45</small>
                        </div>

                        <div className="one_notification" data-id="145575">
                            <div className="operator">
                                <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                            </div>
                            <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/683dfe8d10d73a53" data-task_id="683dfe8d10d73a53">支付中心-接入民生银行 微信H5支付功能，已完成，上线时间待定</a>&nbsp;卡片上</div>
                            <small className="text-right center-block text-muted">2017-06-19 12:08</small>
                        </div>

                        <div className="one_notification" data-id="145575">
                            <div className="operator">
                                <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                            </div>
                            <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/9f5f006f9edd5840" data-task_id="9f5f006f9edd5840">用户中心SDK-联运对接，完成60%</a>&nbsp;卡片上</div>
                            <small className="text-right center-block text-muted">2017-06-19 12:05</small>
                        </div>

                        <div className="one_notification" data-id="145575">
                            <div className="operator">
                                <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                            </div>
                            <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/7f620562cae70079" data-task_id="7f620562cae70079">支付中心-接入 民生银行 钱卖系统下充值方式 退款功能 已提测，预计6月20日开始测试</a>&nbsp;卡片上</div>
                            <small className="text-right center-block text-muted">2017-06-19 12:04</small>
                        </div>

                        <div className="one_notification" data-id="145575">
                            <div className="operator">
                                <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                            </div>
                            <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/f890e3e3635e9091" data-task_id="f890e3e3635e9091">易乐玩官网改版，5月6日已上线</a>&nbsp;卡片上</div>
                            <small className="text-right center-block text-muted">2017-05-15 17:52</small>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <a href="#" className=" center-block text-center" data-toggle="modal" data-target="#NotificationModal" onClick="_closePopup()" data-i18n="show_more">查看更多</a>
                    </div>
                </div>
                <div className="modal fade smart-scrollbar" id="NotificationModal" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="myModalLabel" data-i18n="toolbar.notifications">通知</h4>
                            </div>
                            <div id="notifications_modal_display" className="modal-body"><div className="one_notification" data-id="149361">
                                <div className="operator">
                                    <img className="operator_avator" data-email="1157786006@qq.com" title="szt 1157786006@qq.com" src="https://www.leangoo.com/kanban/avatar/149/149361483d972b5ae32497d7c7946258469a8f.jpeg" alt="" />
                                </div>
                                <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/8453c142ead3d061" data-task_id="8453c142ead3d061">易乐玩联运SDKAndroid2.3.4统计功能测试</a>&nbsp;卡片上</div>
                                <small className="text-right center-block text-muted">2017-07-05 10:45</small>
                            </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/683dfe8d10d73a53" data-task_id="683dfe8d10d73a53">支付中心-接入民生银行 微信H5支付功能，已完成，上线时间待定</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-06-19 12:08</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/9f5f006f9edd5840" data-task_id="9f5f006f9edd5840">用户中心SDK-联运对接，完成60%</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-06-19 12:05</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/7f620562cae70079" data-task_id="7f620562cae70079">支付中心-接入 民生银行 钱卖系统下充值方式 退款功能 已提测，预计6月20日开始测试</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-06-19 12:04</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/f890e3e3635e9091" data-task_id="f890e3e3635e9091">易乐玩官网改版，5月6日已上线</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-15 17:52</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/0a10194af5d0c411" data-task_id="0a10194af5d0c411">页游盒子去积分入口及链接更换、服务端结构调整，预计5月15日上线</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-15 17:52</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/0b45a5013d6776bd" data-task_id="0b45a5013d6776bd">易乐玩游戏《铁甲雄兵》端游官网测试，已完成，上线时间未定</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-15 17:52</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/e50639e518117191" data-task_id="e50639e518117191">OLAP支付中心数据分析</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-15 17:50</small>
                                </div>

                                <div className="one_notification" data-id="145575">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="306143478@qq.com" title="zxm 306143478@qq.com" src="https://www.leangoo.com/kanban/avatar/145/1455756ab19bb9f795ce7b851e2d8f102f127d.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/40f2db27897c7f69" data-task_id="40f2db27897c7f69">福禄接入代收代付测试</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-15 17:49</small>
                                </div>

                                <div className="one_notification" data-id="149361">
                                    <div className="operator">
                                        <img className="operator_avator" data-email="1157786006@qq.com" title="szt 1157786006@qq.com" src="https://www.leangoo.com/kanban/avatar/149/149361483d972b5ae32497d7c7946258469a8f.jpeg" alt="" />
                                    </div>
                                    <div className="invite-notification-msg">将您添加到&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192">WEB项目管理</a>&nbsp;看板的&nbsp;<a href="https://www.leangoo.com/kanban/board/go/1278192/dac90f1e25c5d616" data-task_id="dac90f1e25c5d616">铁甲雄兵  端游官网及展示页提测</a>&nbsp;卡片上</div>
                                    <small className="text-right center-block text-muted">2017-05-09 08:54</small>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <a href="#" className="center-block text-center js-load-more-notification" data-target="#NotificationModal">
                                    查看更多...						</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavTop;