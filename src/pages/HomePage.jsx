import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../helper';
import { View, Text, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, Dropdown, UncontrolledDropdown } from 'reactstrap'


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

    const [visible, setVisible] = React.useState(false)

    const toggle = () => setVisible(!visible)

    return (
        <div>
            <header>
                <section className="banner">
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <ButtonDropdown
                            toggle={toggle}
                            isOpen={visible}
                        >
                            <DropdownToggle caret>
                                Button Dropdown
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
                        <Input placeholder='Cari games di G2G' style={{width:"30%"}} />
                    </div>
                </section>
            </header >
            <div>
                <div>

                </div>
            </div>
        </div >
    )
}
export default HomePage