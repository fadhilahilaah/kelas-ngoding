import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

import { syaratKetentuan } from "../data/index";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Pelajari syarat dan ketentuan sebelum mengikuti kursus kami.
              </p>
            </Col>
          </Row>

          <Row className="pt-5">
            {syaratKetentuan.map((data) => {
              return (
                <div key={data.id}>
                  <h5>
                    {data.id}. {data.title}
                  </h5>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
