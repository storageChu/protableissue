import React from "react";
import { renderRoutes } from 'react-router-config'
import NavTop from './nav_top/nav_top';

require
    (
        './home.css'
    );
require
    (
        './nav_top/nav_top.css'
    );
require
    (
        './board_list.css'
    );


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
            myAccountDropdown: false
        }
    }

    mainClick = () => {
        this.setState({
            myAccountDropdown: false,
        });
    }

    render() {
        const route = this.state.route;
        return (
            <div style={{
                height: '100%',
                width: '100%',
                backgroundImage: "url(" + require("../../imgs/home/bg.jpg") + ")",
            }}>
                <NavTop history={this.props.history}></NavTop>
                <div onClick={this.mainClick}>
                    <div id="div_main_wrapper_container" >
                        {renderRoutes(route.children)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;