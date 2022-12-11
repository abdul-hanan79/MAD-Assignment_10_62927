import { Container,Collapse} from 'react-bootstrap';
import { useState } from 'react';
import style from '../../styles/Question.module.css';
import arrow from '../assets/arrow.png'
import Image from 'next/image';

const Question=()=>{
    const [open, setOpen] = useState(false);
  return (
    <>
     <div className={style.Question} >
     <Container>
      <h1>Selling on HypeIndustry</h1>
      <ul>
        <li>Become A Seller</li>
        <li>Create a listing</li>
        <li>Seller fees</li>
        <li>Condition of items</li>
     </ul>

     <div className={style.qa}>
    <div>
     <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>How do I sell on HypeIndustry? <span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that 
         have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all 
         the required information. We ll notify you as soon as your request has been approved.</p>
        </div>
      </Collapse>
      </div>
      <div>
      <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>I requested to become a SELLER, how long will it get approved? <span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        </div>
      </Collapse>
      </div>
      <div>
      <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>Can I share my seller privileges with others? <span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        </div>
      </Collapse>
      </div>
      <div>
      <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>How do I delete my Account?<span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        </div>
      </Collapse>
      </div>
      <div>
      <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>Can I create several Seller Accounts? <span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        </div>
      </Collapse>
      </div>
      <div>
      <button  onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
      <h6>How do I become a seller if I have a store outside the USA? <span> <Image src={arrow} alt=''/></span> </h6>
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        </div>
      </Collapse>
      </div>
     </div>
   
    </Container>
    </div>
    </>
  )
}
export default Question;