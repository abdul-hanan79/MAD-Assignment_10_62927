import { Container, Row,Col } from "react-bootstrap"
import style from '../../styles/Shipping.module.css'
import shipping1 from '../assets/shipping (1).png'
import shipping2 from '../assets/shipping (2).png'
import Image from "next/image"

const Shiping = () => {
    return(
        <>
        <div className={style.box}>
            <Container>
                <Row>
                    <Col md={6}>
                    <div className={style.img}> <Image src={shipping2} alt=""/> </div>
                    <div className={style.head}> <h2>Shipping for buyers</h2>
                    <p>All of our items are being shipped from several warehouses/stores in the 
USA and worldwide, and usually ships within 24 H to 5 business days 
depending on the seller s shipping time</p>
                     <a href="">Read More </a>
                    </div>
                    </Col>
                    <Col md={6}> <div className={style.img}> <Image src={shipping1} alt=""/> </div>
                    <div className={style.head}> <h2>Shipping for Seller</h2>
                    <p>Once you have approved the purchase, you can request for your labels by 
email at: shipping@hypeindustry.com! Make sure to include:£
z Buyer s details...</p>
                     <a href="">Read More </a>
                    </div></Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Shiping