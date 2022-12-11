import { Col, Container, Row } from 'react-bootstrap'
import style from '../../styles/Footer.module.css'

const Footer= () => {
 return(
    <>
    <div className={style.box}>
        <Container>
            <Row>
                <Col md={3} className={style.text}>
                    <h2>HypeIndustry</h2>
                    <ul>
                        <li>HypeIndustry Concept</li>
                        <li>Buying Guide</li>
                        <li>Selling Guide</li>
                    </ul>
                     </Col>
                     <Col md={3} className={style.text}>
                    <h2>Hype Offers</h2>
                    <ul>
                        <li>Footwear</li>
                        <li>Apparel</li>
                        <li>Accessories</li>
                    </ul>
                     </Col>
                     <Col md={3} className={style.text}>
                    <h2>Shipping</h2>
                    <ul>
                        <li>Shipping for buyers</li>
                        <li>Shipping for Seller</li>
                       
                    </ul>
                     </Col>
                     <Col md={1} className={style.text}></Col>
                     <Col md={2} className={style.text}>
                    <h2>Contact Us</h2>
                    <ul className={style.address}>
                        <li> shipping@hypeindustry.com</li>
                        <li> sale@hypeindustry.com</li>
                       
                    </ul>
                     </Col>
            </Row>
            <div className={style.line}>
                <p>© 2022 HypeIndustry</p>
                </div>
        </Container>
    </div>
    </>
 )
}
export default Footer