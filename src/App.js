import { Row, Col } from "react-bootstrap";
import Particles from "react-particles-js";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Particles
          style={{ position: "absolute", zIndex: 0 }}
          height="500px"
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div className="common-layout">
          <div className="">CORGI 0.00000034 USD</div>
          <Row noGutters className="header__content">
            <Col xs={12} md={6} className="left-col">
              <img
                src="https://corgidoge.com/assets/corgi-100.png"
                alt=""
                className="header__img"
              />
            </Col>
            <Col xs={12} md={6} className="right-col text-center">
              <p className="header__title">Corgidoge real estate payment!</p>
            </Col>
          </Row>
        </div>
      </header>

      <div className="body">
        <section className="airdrop">
          <div className="common-layout">
            <h1 className="text-center">Airdrop and referral program</h1>
            <div className="line w-20" />
            <p className="text-center airdrop__lead">
              <strong>1,000,000,000,000CORGI</strong> ($1.000.000 soft cap) for
              airdrop and referral program. The rule is so simple, you get
              100,000 CORGI instantly when join us and get CORGI with 4 levels
              when you refer your friend. You can earn big CORGI.
            </p>

            <Row noGutters className="airdrop__info">
              <Col xs={12} md={4} className="text-center">
                <div className="airdrop__info-box">
                  <p className="airdrop__info-box__title">Register reward</p>
                  <p className="airdrop__info-box__data">100,000</p>
                  <img
                    src="https://corgidoge.com/assets/corgi-100.png"
                    alt=""
                    className="airdrop__info-box__img"
                  />
                </div>
              </Col>
              <Col xs={12} md={4} className="text-center">
                <div className="airdrop__info-box">
                  <p className="airdrop__info-box__title">Referral reward</p>
                  <p className="airdrop__info-box__data">4 LEVEL</p>
                  <img
                    src="https://corgidoge.com/assets/corgi-100.png"
                    alt=""
                    className="airdrop__info-box__img"
                  />
                </div>
              </Col>
              <Col xs={12} md={4} className="text-center">
                <div className="airdrop__info-box">
                  <p className="airdrop__info-box__title">Total reward</p>
                  <p className="airdrop__info-box__data">1,000B</p>
                  <img
                    src="https://corgidoge.com/assets/corgi-100.png"
                    alt=""
                    className="airdrop__info-box__img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="referral">
          <div className="common-layout">
            <div className="referral__content">
              <Row noGutters>
                <Col xs={12} md={7} className="referral__content__left-col">
                  <div className="level-block">
                    <p>
                      1 LEVEL <strong>(5000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      1 LEVEL <strong>(5000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      1 LEVEL <strong>(5000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      1 LEVEL <strong>(5000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      1 LEVEL <strong>(5000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                </Col>
                <Col xs={12} md={5} className="referral__content__right-col">
                  <div className="package">
                    <h3>Claimed</h3>
                    <img
                      src="https://corgidoge.com/assets/corgi-100.png"
                      alt=""
                      className="header__img"
                    />
                    -<button>Connect Wallet</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
