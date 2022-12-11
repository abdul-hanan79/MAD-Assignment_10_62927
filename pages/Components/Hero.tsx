
import style from '../../styles/Hero.module.css';
import Header from './Header'
// import hero from '../assets/hero.png'
// import Image from 'next/image'
import {Col, Container, Row} from 'react-bootstrap'
import Button from './Button';


type hero={
  heading: string
  text: string
}
let Hero=(props:hero)=>{
    return(
        <>
        <div className={style.hero}> 

        <Header/>
        
    <Container fluid>
        <Row>
            <Col md={12}>
     <div className={style.heroSection}>  
     <div className={style.herotext}>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      <Button btnText='Read More'/>
      </div>
      </div>   
      </Col>
      </Row>    
      </Container>  

     </div>
       
    
 
        </>
    )
}
export default Hero;