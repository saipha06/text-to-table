import React from "react";
import FileUpload from "../components/FileUpload";
import { Container, Row, Col, Card } from "react-bootstrap";

const Upload = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f 0%, #121212 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        color: "#e0e0e0",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card bg="dark" text="light" className="shadow-lg p-4">
              <Card.Header className="text-center" style={{ fontWeight: "700", fontSize: "1.8rem", color: "#61dafb" }}>
                Upload Traffic Data File
              </Card.Header>
              <Card.Body>
                <FileUpload />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Upload;
