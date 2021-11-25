import React from 'react';
import {Row, Col, Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from "../redux/actions/userActions";


function Register() {
    const dispatch = useDispatch()

    function onFinish(values) {
        dispatch(userRegister(values))
        console.log(values)
    }

    return (
        <div className= 'login'>
                
            <Row gutter={16} className= 'd-flex align-items-center'>

                <Col lg={16}>
                    <img className="login-img" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="login"/> 
                    <h1 className="login-logo">uDrive</h1>
                </Col>
                <Col lg={8} className="text-left p-5">
                    <Form layout='vertical' className='login-form p-5' onFinish= {onFinish}>
                        <h1> Register Account</h1>
                        <hr />

                        <Form.Item 
                        name= 'username' 
                        label= 'username' 
                        rules={[{required:true}]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                        name= 'password' 
                        label= 'password' 
                        rules={[{required:true}]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                        name= 'cpassword' 
                        label= 'confirm password' 
                        rules={[{required:true}]}
                        >
                            <Input />
                        </Form.Item>

                        <button className= "btn1">Register</button>
                        <hr/>
                        <Link to= '/login'> Already have an account?</Link>

                    </Form>
                </Col>

            </Row>
        </div>
    )
}

export default Register
