import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../helper';
import { View, Text, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, Dropdown, UncontrolledDropdown, Container, Row, Col } from 'reactstrap'


const HomePage = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = () => {
        axios.get(`${API_URL}/products`)
            .then((res) => {
                setProduct(res.data)
                console.log("data", product)
            }).catch((err) => {
                console.log(err)
            })
    }
    const PrintProduct = () => {
        return product.map((value, index) => {
            return <p>{value.nama}</p>
        })
    }

    const [dropdowntxt, setDropdowntext] = useState({
        dropdowntext: "Dropdown"
    })

    const [visible, setVisible] = useState(false)

    const toggle = () => setVisible(!visible)

    return (
        <div>
            <header>
                <section className="banner">
                    <div style={{marginTop:"30px"}}>
                        <h1 style={{paddingTop:"30px"}}>Kami mencari pemasuk gift card!</h1>
                        <a style={{cursor:"pointer", color:"blue"}}>klik disini untuk mempelajari lebih lanjut</a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop:"40px"}}>                        
                            <ButtonDropdown
                                toggle={toggle}
                                isOpen={visible}
                                
                            >
                                <DropdownToggle caret style={{borderTopLeftRadius:200,borderBottomLeftRadius:200, backgroundColor:"red",color:"white"}}>
                                    {dropdowntxt.dropdowntext}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem disabled>
                                        Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Another Action
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Another Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Input placeholder='Cari games di G2G' style={{ width: "30%", borderTopRightRadius:200, borderBottomRightRadius:200 }} />                        
                    </div>
                </section>
            </header >
            <div>
                <div>
                    <h2 style={{textAlign:"center", marginTop:"30px"}}>Yang Sedang Trend</h2>
                </div>
                <Container>
                    <Row>
                        <Col className='col-12 col-md-6' style={{padding:"20px"}}>
                            <section className='topup-banner'>
                                <p style={{fontSize:"12px", color:"white", paddingTop:"20px", paddingLeft:"20px"}}>Produk <p style={{fontSize:"20px", color:"white"}}>Item</p></p>
                                
                            </section>
                        </Col>
                        <Col className='text-center' style={{padding:"20px"}}>
                        <section className='item-banner'>
                                <p style={{fontSize:"12px", color:"black", paddingTop:"20px", paddingLeft:"20px"}}>Produk <p style={{fontSize:"20px", color:"black"}}>Item</p></p>
                                
                            </section>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
export default HomePage