import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"; // React logo, replace with yours

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top-right fixed logo + title */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "default",
          userSelect: "none",
          zIndex: 9999,
        }}
      >
        <img src={logoUrl} alt="Logo" style={{ width: 40, height: 40 }} />
        <h4 style={{ margin: 0, fontWeight: "700", color: "#61dafb" }}>Traffic Analysis</h4>
      </div>

      {/* Main card */}
      <Card
        bg="dark"
        text="light"
        className="p-5 shadow-lg text-center"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <Card.Body>
          <Card.Title
            as="h1"
            className="mb-4"
            style={{ fontWeight: "700", fontSize: "2.5rem" }}
          >
            Traffic Data Analysis
          </Card.Title>
          <Card.Text className="mb-4">
            Upload your traffic data text files and visualize them instantly.
          </Card.Text>
          <Button
            variant="outline-info"
            size="lg"
            onClick={() => navigate("/upload")}
            className="animated-button"
          >
            Get Started →
          </Button>
        </Card.Body>
      </Card>

      {/* Button animation styles */}
      <style>{`
        .animated-button {
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        .animated-button:hover {
          background-color: #61dafb !important;
          color: #121212 !important;
          transform: scale(1.05);
        }
        .animated-button:focus {
          box-shadow: 0 0 10px #61dafb;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
