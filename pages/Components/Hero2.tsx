import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import style from '../../styles/Hero2.module.css'
import roadmap from '../assets/p5.png'
import suit from '../assets/p3.png'
import world from '../assets/p4.png'
import frame1 from '../assets/i (1).png'
import frame2 from '../assets/i (2).png'
import icon1 from '../assets/icon.png'
import icon2 from '../assets/icon3.png'
import icon3 from '../assets/icon2.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'

import Image from 'next/image'

type hero = {
    heading: string
    text: string
}

const Hero2 = (props: hero) => {
    return (
        <>
            <div className={style.hero}>

                <Header />

                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <div className={style.heroSection}>
                                <div className={style.herotext}>
                                    <h1>{props.heading}</h1>
                                    <p>{props.text}</p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Container className={style.box2}>
                <Row>
                    <Col md={5}><Image src={roadmap} alt='' /></Col>
                    <Col md={7}><h1>20 years of relationships + experience</h1>
                        <p>The idea of building a B2B marketplace, came to us a few years ago. Experiencing the process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve encountered issues and restrictions , we also faced lots of question from sellers and buyers, shipping issues etc... But at the end of this journey, we are now providing answers and solutions that will help our network and partners!</p></Col>
                </Row>
            </Container>

            <Container fluid className={style.box3}>
                <Row>

                    <Col md={6}><h1>Always the same issue through the years </h1>
                        <p>Many years have past of doing this bulk /wholesale trading business...
                            <br /> <br />
                            And it is always the same questions that came to us from our suppliers: “Hey can you move apparel? I have too much of this brand etc...”, or “Can you buy any accessories?”, “Can you move soccer shoes?”, “I received another shipment of this model ;can you buy more or help me move more now?” etc...
                            <br /> <br />
                            Well the answer was: “We don’t have any clients for those items, or let me ask around”</p></Col>
                    <Col md={6}><Image src={suit} alt='' /></Col>
                </Row>


                <Row>
                    <Col md={6}><Image src={world} alt='' /></Col>
                    <Col md={6}><h1>Utopia </h1>
                        <p>In a utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth.
                            <br /> <br />
                            Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel, accessories) without any boundaries or questions! So lets try and create that platform: so other store owners & resellers/wholesalers worldwide could profit from!</p></Col>

                </Row>
            </Container>

            <Container className={style.box4}>
                <Row>
                    <Col md={6}><h1>Reality</h1>
                    <p> Stores are flooded with quantities of the same items, so what do they do? They flip them on well known resell platform/marketplace; and we are all very familiar with these marketplaces... . How can you sell some Yeezys or Nike, when buyers/bidders are offering a price of 20-35% under retail? Simple, if you are not the store yourself or a person who bought them at roughly 35% to 40% off retail... then forget it!
                        <br /><br />
                        So, as a store owner, we see 3 options :
                        <br />
                        Sell all your sleeping inventory on certain platforms one by one etc. (and for sure , some models will not even sell ...so it’s a loss).Shipping will take a while, and you are wasting time & labor... </p></Col>
                        <Col md={6}><Image src={frame1} alt='' /></Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                <Col md={6}><Image src={frame2} alt='' /></Col>
                    <Col md={6}><h1></h1>
                    <p> Wholesale them to some entity or reseller you trust.But again they might only want to buy the good and the average stuff, that they can flip.
                        <br /><br />
                        Last but not least : Sell them on a platform in bulk anonymously, with or without a discount ! Allowing your Hyped or general merchandise release inventory to reach multiple stores/resellers in the USA and worldwide . Forget the classic individual B2C (business to consumer) model and , aim at other stores/ wholesalers .The Hype around the footwear, Apparel, Accessory resell market is wide and active! There are many options out there that need to be exploited! </p></Col>
                        
                </Row>
            </Container>
            <Container  className={style.box5}>
                <h1>The PROS of such platform</h1>
                <Row>
                    <Col md={4} ><Image src={icon1} alt=''/>
                    <h2>SHIPPING</h2>
                    <p>Sellers (stores and resellers) do not need to worry about shipment.We use the main carrier with tracking all the time !</p></Col>
                    <Col md={4} ><Image src={icon2} alt=''/>
                    <h2>ANONYMITY</h2>
                    <p>By using this platform, nobody knows who the sellers are. Anonymity is respected!</p></Col>
                    <Col md={4} ><Image src={icon3} alt=''/>
                    <h2>BRAND INTEGRITY</h2>
                    <p>Reputable brands dislike to see their product sell for significantly under retail and doing so, may cause stores to lose their accounts.</p></Col>
                </Row>
                <Row>
                    <Col md={4} ><Image src={icon4} alt=''/>
                    <h2>FREEDOM</h2>
                    <p>Freedom for Stores/Resellers to list in bulk any inventory they want at any time they want! Inventory should sell faster this way! Better than offering a 10%-35% off coupons on their website and selling them one item at a time... let’s move the inventory ASAP! Stores are not museums: Boxes, tape, rent,electricity bill, payroll: those have a cost!</p></Col>
                    <Col md={4} ><Image src={icon5} alt=''/>
                    <h2>”FLA$H FLIPPING”</h2>
                    <p>This option (for the top buyers only) allows you to re-flip a bundle or amount of items ( by adding a margin per pair) ,you just purchased , and flip it back on our platform for a limited time (1 hour window)! Creating a new avenue of profit for our clients! The profit/commission is paid right away if the bundle sells !Making money on a click of a button .The new bulk traders have arrived !</p></Col>
                    <Col md={4} ></Col>
                </Row>
            </Container>
            
        </>
    )
}
export default Hero2