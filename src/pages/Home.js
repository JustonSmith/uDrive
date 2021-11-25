import React , {useState , useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Row, Col } from 'antd';
import Spinner from '../components/Spinner';


function Home() {
    const {cars, loading} = useSelector(state=>state.carsReducer)
    // const {loading} = useSelector(state => state.alertReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    },[])


    return (
            <DefaultLayout>

            {loading === true && (<Spinner />)}

                <Row justify= 'center' gutter= {16} className= 'mt-5'>
                    {cars.map(car=>{
                        return <Col lg={5} sm={24} xs={24}>
                                <div className="car p-2 bs1">
                                    <img src={car.image} alt="car" className="carimg" />
                                    <div className="car-content d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>{car.name}</p>
                                            <p>{car.rentPerHour} Per Day /-</p>
                                        </div>
                                        <div>
                                            <button className="btn1 mr-2">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                    })}
                </Row>
            </DefaultLayout>
    )
}

export default Home
