import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px"}}>
        <Row style={{justifyContent: "center"}}>
          <Col md={7}>
            <h1>Pizza Shop</h1>
            <p>
              LoremLorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quia nihil modi ut exercitationem, sequi minima labore iusto
              dolorem. Ad officia sunt repellendus sint repellat! Pariatur, amet
              laborum. Quisquam, deserunt eveniet.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quia nihil modi ut exercitationem,
              sequi minima labore iusto dolorem. Ad officia sunt repellendus
              sint repellat! Pariatur, amet laborum. Quisquam, deserunt
              eveniet.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quia nihil modi ut exercitationem, sequi minima labore iusto
              dolorem. Ad officia sunt repellendus sint repellat! Pariatur, amet
              laborum. Quisquam, deserunt eveniet.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quia nihil modi ut exercitationem,
              sequi minima labore iusto dolorem. Ad officia sunt repellendus
              sint repellat! Pariatur, amet laborum. Quisquam, deserunt eveniet.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>--- Contact Details ---</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhoneCall /></td>
                  <td>Phone</td>
                  <td>+92-335-9588458</td>
                </tr>
                <tr>
                  <td><AiOutlineMail /></td>
                  <td>Email</td>
                  <td>mr.hamxa942@gmail.com</td>
                </tr>
                <tr>
                  <td><AiOutlineHome /></td>
                  <td>Address</td>
                  <td>Post Office Chowkara District Karak</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" style={{width: "100%", height: "100%"}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
