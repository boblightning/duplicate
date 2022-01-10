// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { API_URL } from '../helper';
// import { View, Text, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, Dropdown, UncontrolledDropdown, Container, Row, Col, Card, CardText } from 'reactstrap'


// const HomePage = (props) => {
//     const [product, setProduct] = useState([])
//     useEffect(() => {
//         getProduct()
//     }, [])
//     const getProduct = () => {
//         axios.get(`${API_URL}/products`)
//             .then((res) => {
//                 setProduct(res.data)
//                 console.log("data", product)
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }
//     const PrintProduct = () => {
//         return product.map((value, index) => {
//             return <p>{value.nama}</p>
//         })
//     }

//     const [dropdowntxt, setDropdowntext] = useState({
//         dropdowntext: "Dropdown"
//     })

//     const [visible, setVisible] = useState(false)

//     const toggle = () => setVisible(!visible)

//     return (
//         <div>
//             <header>
//                 <section className="banner">
//                     <div style={{ marginTop: "30px" }}>
//                         <h1 style={{ paddingTop: "30px" }}>Kami mencari pemasuk gift card!</h1>
//                         <a style={{ cursor: "pointer", color: "blue" }}>klik disini untuk mempelajari lebih lanjut</a>
//                     </div>
//                     <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
//                         <ButtonDropdown
//                             toggle={toggle}
//                             isOpen={visible}

//                         >
//                             <DropdownToggle caret style={{ borderTopLeftRadius: 200, borderBottomLeftRadius: 200, backgroundColor: "red", color: "white" }}>
//                                 {dropdowntxt.dropdowntext}
//                             </DropdownToggle>
//                             <DropdownMenu>
//                                 <DropdownItem header>
//                                     Header
//                                 </DropdownItem>
//                                 <DropdownItem disabled>
//                                     Action
//                                 </DropdownItem>
//                                 <DropdownItem>
//                                     Another Action
//                                 </DropdownItem>
//                                 <DropdownItem divider />
//                                 <DropdownItem>
//                                     Another Action
//                                 </DropdownItem>
//                             </DropdownMenu>
//                         </ButtonDropdown>
//                         <Input placeholder='Cari games di G2G' style={{ width: "30%", borderTopRightRadius: 200, borderBottomRightRadius: 200 }} />
//                     </div>
//                 </section>
//             </header >
//             <div>
//                 <div>
//                     <h2 style={{ textAlign: "center", marginTop: "30px" }}>Yang Sedang Trend</h2>
//                 </div>
//                 <Container>
//                     <Row>
//                         <Col className='col-12 col-md-6' style={{ padding: "20px" }}>
//                             <Card>
//                                 <section className='topup-banner'>
//                                     <p style={{ fontSize: "12px", color: "white", paddingTop: "20px", paddingLeft: "20px" }}>Produk <p style={{ fontSize: "20px", color: "white" }}>Item</p></p>
//                                 </section>
//                                 <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
//                                         <CardText style={{ color: "black", alignItems: "left" }}>Diablo 2 Resurrected</CardText>
//                                         <Card style={{ height: "10%", borderColor: "gray" }}>
//                                             <CardText style={{ color: "black" }}>68,7k Penawaran</CardText>
//                                         </Card>
//                                     </div>
//                                 </Button>
//                                 <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
//                                         <CardText style={{ color: "black", alignItems: "left" }}>Rocket League</CardText>
//                                         <Card style={{ height: "10%", borderColor: "gray" }}>
//                                             <CardText style={{ color: "black" }}>29k Penawaran</CardText>
//                                         </Card>
//                                     </div>
//                                 </Button>
//                             </Card>
//                         </Col>
//                         <Col className='text-center' style={{ padding: "20px" }}>
//                             <section className='item-banner'>
//                                 <p style={{ fontSize: "12px", color: "black", paddingTop: "20px", paddingLeft: "20px" }}>Produk <p style={{ fontSize: "20px", color: "black" }}>Top Up</p></p>
//                             </section>
//                             <Card>
//                                 <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
//                                         <CardText style={{ color: "black", alignItems: "left" }}>Mobile Legend</CardText>
//                                         <Card style={{ height: "10%", borderColor: "gray" }}>
//                                             <CardText style={{ color: "black" }}>50k Penawaran</CardText>
//                                         </Card>
//                                     </div>
//                                 </Button>
//                                 <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
//                                         <CardText style={{ color: "black", alignItems: "left" }}>Free Fire</CardText>
//                                         <Card style={{ height: "10%", borderColor: "gray" }}>
//                                             <CardText style={{ color: "black" }}>41k Penawaran</CardText>
//                                         </Card>
//                                     </div>
//                                 </Button>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div >
//     )
// }
// export default HomePage

import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../helper";
import { View, Text, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, Dropdown, UncontrolledDropdown, Container, Row, Col, Card, CardText } from "reactstrap";
import "./HomePage.css";
import InputSearch from "../../components/input-search/InputSearch";

const AvatarsItems = [
  { name: "Gift Card", imgPath: "./giftcard.svg", color: "rgb(46, 189, 181)" },
  { name: "Game Coins", imgPath: "gamecoins.svg", color: "rgb(246, 103, 137)" },
  { name: "Items", imgPath: "items-avatar.svg", color: "rgb(121, 135, 255)" },
  { name: "Coaching", imgPath: "coaching.svg", color: "rgb(63, 231, 160)" },
  { name: "Gamepal", imgPath: "gamepal.svg", color: "rgb(255, 198, 0)" },
  { name: "Top up", imgPath: "topup-avatar.svg", color: "rgb(117, 200, 52)" },
  { name: "Skin", imgPath: "skin-avatar.svg", color: "rgb(199, 110, 254)" },
  { name: "Akun", imgPath: "akun-avatar.svg", color: "rgb(23, 144, 255)" }
];

const HomePage = (props) => {
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(false);

  const getProduct = () => {
    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        setProduct(res.data);
        console.log("data", product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PrintProduct = () => {
    return product.map((value, index) => {
      return <p>{value.nama}</p>;
    });
  };

  useEffect(getProduct, []);

  return (
    <div className="homepage" style={{ cursor: "pointer" }}>
      <header className="banner-container" children={<InputSearch />} />

      <section className="home-menus">
        <Container>
          <Row>
            {AvatarsItems.map((item, id) => (
              <Col key={id} className="avatar-col">
                <div className="avatar-col-inner" onClick={console.log}>
                  <div className="avatar" style={{ background: item.color }}>
                    <div className="q-avatar__content">
                      <img
                        aria-hidden="true"
                        role="presentation"
                        src={item.imgPath}
                        className="q-icon notranslate"
                        style={{ fontSize: 30 }}
                      />
                    </div>
                  </div>
                  {item.name}
                </div>

              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="trending-items-section text-center">
        <h2>Yang Sedang Trend</h2>
        <Container>
          <Row>
            <Col className='col-12 col-md-6' style={{ padding: "20px" }}>
              <Card>
                <section className='topup-banner'>
                  <p style={{ fontSize: "12px", color: "white", paddingTop: "20px", paddingLeft: "20px" }}>Produk <p style={{ fontSize: "20px", color: "white" }}>Item</p></p>
                </section>
                <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <CardText style={{ color: "black", alignItems: "left" }}>Diablo 2 Resurrected</CardText>
                    <Card style={{ height: "10%", borderColor: "gray" }}>
                      <CardText style={{ color: "black" }}>68,7k Penawaran</CardText>
                    </Card>
                  </div>
                </Button>
                <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <CardText style={{ color: "black", alignItems: "left" }}>Rocket League</CardText>
                    <Card style={{ height: "10%", borderColor: "gray" }}>
                      <CardText style={{ color: "black" }}>29k Penawaran</CardText>
                    </Card>
                  </div>
                </Button>
              </Card>
            </Col>
            <Col className='text-center' style={{ padding: "20px" }}>
              <section className='item-banner'>
                <p style={{ fontSize: "12px", color: "black", paddingTop: "20px", paddingLeft: "20px" }}>Produk <p style={{ fontSize: "20px", color: "black" }}>Top Up</p></p>
              </section>
              <Card>
                <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <CardText style={{ color: "black", alignItems: "left" }}>Mobile Legend</CardText>
                    <Card style={{ height: "10%", borderColor: "gray" }}>
                      <CardText style={{ color: "black" }}>50k Penawaran</CardText>
                    </Card>
                  </div>
                </Button>
                <Button style={{ backgroundColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "gray", borderTopColor: "gray" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
                    <CardText style={{ color: "black", alignItems: "left" }}>Free Fire</CardText>
                    <Card style={{ height: "10%", borderColor: "gray" }}>
                      <CardText style={{ color: "black" }}>41k Penawaran</CardText>
                    </Card>
                  </div>
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="promotion-banner">
        <Container className="promotion-section">
          {/* <div className="col-md-1">

          </div> */}
          <Card className="col-md-4 promotion-banner" style={{ textAlign: "center", marginBottom:"48px" }}>
            <div style={{ alignSelf: "center" }}>
              <img className="avatar-blue" src="../../shield.svg" />
            </div>
            <div>
              <label style={{ fontWeight: "bold", fontSize: "20px" }}>Transaksi Aman</label>
            </div>
            <p style={{ fontSize: "14px" }}>Rasakan kenyamanan disetiap transaksi Anda dengan kami. GamerProtect hadir dengan perlindungan SSL dan pilihan metode pembayaran yang luas dibawah naungan platform yang aman dan terjamin. </p>
          </Card>
          <Card className="col-md-4 promotion-banner" style={{ textAlign: "center", marginBottom:"48px" }}>
            <div style={{ alignSelf: "center" }}>
              <img className="avatar-blue" src="../../cs.svg" />
            </div>
            <div>
              <label style={{ fontWeight: "bold", fontSize: "20px" }}>Layanan Pelanggan</label>
            </div>
            <p style={{ fontSize: "14px" }}>Tim Layanan Pelanggan kami akan selalu siap membantu Anda terkait pertanyaan tentang pesanan dan memberikan layanan purna jual yang luar biasa. </p>
          </Card>
          <Card className="col-md-4 promotion-banner" style={{ textAlign: "center" }}>
            <div style={{ alignSelf: "center" }}>
              <img className="avatar-blue" src="../../promotion.svg" />
            </div>
            <label style={{ fontWeight: "bold" }}>Penawaran Terbaik</label>
          </Card>
        </Container>
      </section>
    </div>
  );
};
export default HomePage;
