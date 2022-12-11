import  style from "../../styles/Blog.module.css";
import Image from "next/image";
import blog1 from "../assets/blog (1).png";
import blog2 from "../assets/blog (2).png";
import { Col, Container, Row } from "react-bootstrap";
const Blog = () => {
  return (
    <>
      <div>
        <Container className={style.blog}>
          <Row>
            <Col md={6} className={style.blogimg}>
                  <Image  src={blog1} alt="" />
            </Col>

            <Col md={6} className={style.blogtext}>
              <h1>Why HypeIndustry and what is it</h1>
              <p>
                Hypeindustry is a one-of-a-kind Platform + Marketplace offering
                Bulk/Wholesale goods from Stores, Boutiques, Wholesalers &
                Resellers for the Footwear, Apparel & Accessory industry!
                Basically a new marketplace that allows you to buy in bulk
                (only) footwear, apparel etc...
              </p>

            </Col>
          </Row>

          <Row className={style.blog2}>
            
            <Col md={6} className={style.blogtext}>
              <h1></h1>
              <p>
              Buy cheaper because of the bulk volume discount and resell 
worldwide to make a small margin and keep the volume and 
recurrence active! The key to make your money fast .
              </p>
              <a href="">Read More </a>
            </Col>
            <Col md={6} className={style.blogimg}>
                  <Image src={blog2} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Blog;
