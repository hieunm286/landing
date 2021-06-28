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
                      2 LEVEL <strong>(3000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      3 LEVEL <strong>(2000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      4 LEVEL <strong>(1000)</strong>:
                    </p>
                    <p>0</p>
                  </div>
                  <div className="level-block">
                    <p>
                      <strong>TOTAL</strong>:
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
                    <h3>-</h3>
                    <div className="text-center">
                      <button className="button-connect">Connect Wallet</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="eco">
          <div className="common-layout">
            <div className="eco__system">
              <h1 className="text-center mt-5 mb-5">Corgidoge Ecosystem</h1>
              <Row noGutters>
                <Col xs={12} md={3}>
                  <div className="eco__system-block text-center">
                    <img src="https://corgidoge.com/assets/corgic.png" alt="" />
                    <h5>
                      <strong>CORGI cryptocurrency</strong>
                    </h5>
                    <p>
                      CORGI currency uses blockchain to transfer the value and
                      benefits of cryptocurrency holders.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="eco__system-block text-center">
                    <img src="https://corgidoge.com/assets/corgis.png" alt="" />
                    <h5>
                      <strong>CorgiS - exchange</strong>
                    </h5>
                    <p>
                      CorgiS cryptocurrency exchange allows trading and storing
                      cryptocurrencies. In addition, it also pays profits to
                      investors holding CORGI cryptocurrency.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="eco__system-block-1 text-center">
                    <img src="https://corgidoge.com/assets/corgir.png" alt="" />
                    <h5>
                      <strong>
                        CorgiR - real estate investment application
                      </strong>
                    </h5>
                    <p>
                      CorgiR Real Estate Investment application allows people to
                      invest in real estate worldwide by paying with CORGI
                      cryptocurrency. In addition to profiting from real estate,
                      investors also benefit from the growth price of CORGI in
                      the cryptocurrency market.
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="eco__system-block-2 text-center">
                    <img src="https://corgidoge.com/assets/corgie.png" alt="" />
                    <h5>
                      <strong>E-commerce platform CorgiE</strong>
                    </h5>
                    <p>
                      CorgiE eCommerce platform allows anyone to buy/sell
                      decentralized goods and pay with CORGI cryptocurrency,
                      address the current inadequacies of currency exchange rate
                      differences between countries.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="eco__info mt-5">
              <h1 className="text-center">Corgidoge</h1>
              <div className="line w-20" />

              <p className="text-center">
                Our vision is to build an ecological system around Corgidoge
                including spaces, working communities, real estate investment
                applications, eCommerce platforms, cryptocurrency exchanges that
                are suitable for everyone. This system will encourage the
                acceptance and utilization of CORGI cryptocurrency to help
                promote demand and create value for sustainable development in
                the future.
              </p>

              <p className="text-center mt-5">
                A real estate investment application, eCommerce platform, the
                cryptocurrency exchange is designed to maximize the benefits of
                CORGI coin. The long-term develop- ment-oriented CORGI will
                become one of the used coins widely and replace existing coins.
              </p>

              <div className="button-group text-center mt-5">
                <a
                  href="http://corgidoge.com/CORGIDOGE_WHITEPAPER_V1.pdf"
                  target="_blank"
                  className="btn_def btn_dark_color mt-3"
                  rel="noreferrer"
                >
                  WHITEPAPER
                </a>
                <a
                  href="https://bscscan.com/token/0x802c68730212295149f2bea78c25e2cf5a05b8a0"
                  target="_blank"
                  className="btn_def btn_dark_color mt-3"
                  rel="noreferrer"
                >
                  CONTRACT EXPLORER
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap">
          <div className="common-layout">
            <h1 className="text-center pt-5 pb-5">Corgidoge Roadmap</h1>

            <ul className="roadmap__progress">
              <li>
                <h3>Q2 2021</h3>
                <p>
                  <span className="text_content">
                    Launch of Corgidoge on Binance Smart Chain
                  </span>
                  <span className="icon_pointer check_add">
                    {/* <img src="https://corgidoge.com/assets/icon_check.svg" alt="" /> */}
                  </span>
                </p>
                <p>
                  <span className="text_content">
                    Airdrop &amp; Swap on pancakeswap/bakeryswap
                  </span>
                  <span className="icon_pointer check_add"></span>
                </p>
                <p>
                  <span className="text_content">IEO Round 1</span>
                  <span className="icon_pointer"></span>
                </p>
              </li>

              <li>
                <h3>Q3 2021</h3>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Launch of official website and mobile wallet
                  </span>
                </p>
                <p>
                  <span className="text_content">IEO Round 2</span>
                  <span className="icon_pointer"></span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Corgi is be listed crypto exchanges
                  </span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Release stake pool and reward for staking
                  </span>
                </p>
              </li>

              <li>
                <h3>Q1 2022</h3>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Launching CorgiS, Corgi Wallet 1.0 Release (iOS &amp;
                    Android)
                  </span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Release CorgiS pool and reward for staking
                  </span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">Release charity funds.</span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    There is a large amount of reward remaining, the leftover
                    will be burned
                  </span>
                </p>
              </li>

              <li>
                <h3>Q3 2022</h3>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Launch of CorgiR Introduction of Corgi Governance Power (GP)
                  </span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    There is a large amount of reward remaining, the leftover
                    will be burned
                  </span>
                </p>
              </li>

              <li>
                <h3>Q4 2022</h3>
                <p>
                  <span className="text_content">
                    Launch of CorgiE<span className="icon_pointer"></span>
                  </span>
                </p>
                <p>
                  <span className="text_content">
                    Introduction of Corgi Fast Transactions Layer and Governance
                    Features(E.g.Voting)<span className="icon_pointer"></span>
                  </span>
                </p>
                <p>
                  <span className="text_content">
                    Global Adoption<span className="icon_pointer"></span>
                  </span>
                </p>
              </li>

              <li>
                <h3>2023</h3>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">Launch of CorgiE</span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">
                    Introduction of Corgi Fast Transactions Layer and Governance
                    Features (E.g.Voting)
                  </span>
                </p>
                <p>
                  <span className="icon_pointer"></span>
                  <span className="text_content">Global adoption</span>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="find-us pb-5">
          <div className="common-layout">
            <h1 className="text-center pt-5 pb-3">Find us on</h1>

            <ul className="find-us__list">
              <li>
                <a
                  href="https://coinmarketcap.com/en/currencies/corgidoge-real-estate-payment/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://corgidoge.com/assets/coinmarketcap.png"
                    alt="coinmarketcap"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://poocoin.app/tokens/0x802c68730212295149f2bea78c25e2cf5a05b8a0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://corgidoge.com/assets/poo.jpeg"
                    alt="coinranking"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://coinranking.com/coin/3yttH0S2o+corgidoge-corgi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://corgidoge.com/assets/coinranking.svg"
                    alt="coinranking"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://coinpaprika.com/coin/corgi-corgidoge/#!exchanges"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://corgidoge.com/assets/coinpaprika.jpeg"
                    alt="coinpaprika"
                  />
                </a>
              </li>
            </ul>

            <h1 className="text-center pt-5 pb-3">Corgidoge exchanges</h1>
            <ul className="find-us__list">
              <li>
                <a
                  href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x802c68730212295149f2bea78c25e2cf5a05b8a0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://corgidoge.com/assets/pancakeswap.png"
                    alt="pancakeswap"
                  />
                </a>
              </li>
            </ul>

            <h4 className="font-weight-bolder mt-5 mb-5">Disclaimer</h4>
            <h4 className="font-weight-bolder">
              Materials presented on this website are not final technical
              specification.
            </h4>
            <p className="leads">
              The project presented herein is in its initial, conceptual phase
              and can be modified, changed or even abandoned (e.g., due to
              economical, technological or regulatory reasons) and nothing on
              this website shall be considered as a final and binding
              description or view of the project, or any of its parts or
              components, or with regards to its execution.
            </p>
            <h4 className="font-weight-bolder">
              This website does not constitute financial advice.
            </h4>
            <p className="leads">
              Information and materials on this website are not to be considered
              as investment advice. The cryptocurrency market is highly
              volatile. You should carefully consider whether cryptocurrency is
              right for you considering your circumstances and financial
              resources. By following information and materials on the website,
              you acknowledge that you have not sought investment advice from
              the author(s), or any parties formally connected to the author(s),
              as said author(s) and parties may not provide such advice. You are
              not expected, or offered, to invest, buy, or perform any related
              financial activities in any shape or form based on any information
              on this website, and you acknowledge that any such actions are
              solely of your personal responsibility
            </p>
          </div>
        </section>

        <footer className="text-center">
          <p className="font-weight-bolder text-center">
            <span className="pl-3 pr-3">JOIN US ON</span>
            <span className="icon">
              <a
                href="https://twitter.com/CormgidogeC"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://corgidoge.com/assets/tw.svg" alt="Icon" />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://t.me/corgidoge_official"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://corgidoge.com/assets/tel.svg" alt="Icon" />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://github.com/corgidoge-official"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://corgidoge.com/assets/gh.svg" alt="Icon" />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://corgidoge.medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="25"
                  src="https://corgidoge.com/assets/medium.png"
                  alt="Icon"
                />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://www.facebook.com/corgidogecoinpaymentmethod"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://corgidoge.com/assets/face.svg" alt="Icon" />
              </a>
            </span>
          </p>
          <p className="copy-right text-center">2021 © Corgidoge All rights reserved.</p>
          <a href="/" className="text-center">
            <strong>Privacy policy</strong>
          </a>
          <p className="contact text-center">contact@corgidoge.com</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
