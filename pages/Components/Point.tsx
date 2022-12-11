
import { Col, Container, Row } from 'react-bootstrap';
import Button from './Button';
import style from '../../styles/Point.module.css';
const Point = () => {
    return (
        <>
            <div className={style.Point}>
                <h1>Buying on Hypeindustry is simple!</h1>
                <Container className={style.Container}>
                    <Row>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>1</div>
                            <p>Create a buyer account / profile, with all required fields: Full name, Company name or Store Name, Address, Credit Card info etc...</p>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>2</div>

                            <p>You will then receive email alerts whenever any
                                seller posts an offer on the platform. Then it is
                                up to you to click on the link to view the offer or
                                not. Of course, each email alert contains the
                                offer details and models, so you know what
                                has been posted, and if it is in any of your
                                interest to purchase or not.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>3</div>
                            <p>The offer can either be: an open stock inventory , 
meaning you can select any sizes you want from the 
seller stock with of course a minimum quantity 
imposed by the seller (if he wants to), or a buy all /
take all offer , which means that the seller wants 
you to buy all the quantities in that specific model. 
Usually buy all deals have a higher discounted 
purchase price. Keep in mind, once you place an 
order on an open stock model, the stock is live and 
updated right away for the next buyer, which will 
reflect less quantities in the inventory...until it 
reaches a: sold out status.</p>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>4</div>

                            <p>Once logged in, simply view the offer and click 
on any of the models you wish to order by 
clicking on the open stock / or buy all 
buttons.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>5</div>
                            <p>Once the seller approves the order, (this might take 
10 min or up to to 3 days) your credit card will be 
charged, and you will receive an email with a 
tracking number. NO charges will be done unless 
orders are APPROVED ! We created a dashboard for 
buyers so you can see all the information you need: 
invoice number, tracking number, carrier /shipper, 
pdf downloadable invoices etc...Now, you have your 
own excel accounting sheet with you all the time.</p>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5} className={style.box}>
                            <div className={style.heading}>6</div>

                            <p>Please keep in mind: there are no refunds, no 
returns, no order cancellations, all sales are 
finals unless the wrong items were shipped! 
This is a B2B Platform.</p>
                        </Col>
                    </Row>

                 <div className={style.btn}>  <Button btnText='Learn More'/></div>  
                </Container>
            </div>
        </>
    )
}

export default Point