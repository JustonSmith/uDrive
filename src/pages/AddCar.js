import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { addCar } from '../redux/actions/carsActions'
import { Col , Row , Form , Input } from 'antd'
import Spinner from '../components/Spinner'

function AddCar() {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)

    function onFinish(values) {

        values.bookedTimeSlots = []

        dispatch(addCar(values))
        console.log(values)
    }

    return (
        <DefaultLayout>
            {loading && (<Spinner />)}
            <h1> New Car : </h1>
            <hr />
            <Row justify="center mt-5">
                <Col lg={12} sm={24}>
                <Form className="bs1 p-2" layout='vertical' onFinish={onFinish}>

                    <Form.Item name= 'name' label= 'Car Name' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name= 'image' label= 'Image URL' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name= 'rentPerHour' label= 'Hourly Rate' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name= 'capacity' label= 'Capacity' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name= 'fuelType' label= 'Fuel Type' rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <div className="text-right">
                        <button className= 'btn1'>ADD CAR</button>
                    </div>

                </Form>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default AddCar
