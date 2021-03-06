import React from 'react'
import { Menu, Dropdown, Button, Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

function DefaultLayout(props) {

        const user = JSON.parse(localStorage.getItem('user'))

    const menu = (
        <Menu className="dropmenu">
                        <Menu.Item>
                <a href="/">
                Home
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="/userbookings">
                My Bookings
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="/admin">
                Admin
                </a>
            </Menu.Item>
            <Menu.Item onClick= {() => {
                localStorage.removeItem('user');
                window.location.href='/login';
            }} >
                <li style={{color:'red'}}>
                    Logout
                </li>
            </Menu.Item>
            </Menu>
        );

    return (
        <div>
            <div className= "header bs1">
                <Row gutter= {16} justify= 'center' >
                    <Col lg={20} sm={20} xs={24}>
                    <div className= "d-flex justify-content-between">

                        <h1 className="home-logo"> <Link style={{color : 'red'}} to={`/`}>uDrive</Link> </h1>

                        

                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>{user.username}</Button>
                    </Dropdown>

                </div>
                    </Col>
                </Row>
                
            </div>
            <div className= "content">
                {props.children}
            </div>
            <div className="footer text-center bs1">
                <p>Designed and Developed at: </p>
                <p>SludgeCity LLC</p>

            </div>
        </div>
    )
}

export default DefaultLayout
