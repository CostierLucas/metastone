import type { NextPage } from 'next'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Slider from '../components/slider/slider'

const Home: NextPage = () => {
  return (
    <div className="Wrapper">
      {/* Header */}
      <Header />
      {/* Intro */}
      <section className="intro">
        <div className="visual">
          <img className="preview" src="/img/intro.png" alt="intro" />
        </div>
        <div className="description">
          <h1>Welcome to MetaStone</h1>
          <p>
            MetaStone is a 1000 generative 3D gemstones and art collection by a
            French team that aims at giving accessibility to a world of
            jewellery, luxury and fashion. Each piece is adequate for accurate
            life stone cuts and stone types and has a real-life market value.
            These unique digital collectables will grant you access to
            holders-only benefits related to the luxury and jewellery
            industries. In addition, future perks will be unlocked by the
            community through roadmap activation.
          </p>
          <a className="arrow" href="#Gallery">
            Get your stone
            <p className="soon">(soon)</p>
          </a>
          <img className="lueur" src="/img/lueur.svg" alt="intro" />
        </div>
      </section>

      {/* Gallery */}
      <div id="Gallery" className="spacer" />
      <section className="gallery">
        <h2>
          Our <br />
          Gallery
        </h2>
        <p>
          Our collection thrives on recreating a mix of all cuts and stone types
          that would be possible. The MetaStone’s collection includes hundreds
          of rare gemstone-encrusted face masks inspired by historic templates
          and dozens of legendary stone cuts in shapes that go beyond today's
          reality. These are also all manipulable in the Holder's inventory.
        </p>
        <a className="arrow" href="#Gallery">
          Get your stone
          <p className="soon">(soon)</p>
        </a>

        {/* Slider */}
        <div className="sliderHome">
          <Slider></Slider>
        </div>
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
      </section>

      {/* Roadmap */}
      <div id="Roadmap" className="spacer" />
      <section className="map">
        <h2>Roadmap</h2>
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
        <div className="roadmap">
          {/* stage 1 */}
          <div className="stage one">
            <h3>Stage 1 - Luxury Brands Expansion</h3>
            <p>Rewarding all the V1 investors with</p>
            <ul>
              <li>Partnerships</li>
              <li>Collabs</li>
              <li>Giveaways</li>
              <li>Twitter, Discord and Instagram AMA’s</li>
              <li>Luxury conventions and events.</li>
              <li>Luxurious experiences</li>
            </ul>
          </div>
          {/* stage 2 */}
          <div className="stage two">
            <h3>Stage 2 - Charitable Expansion</h3>
            <p>Leave a footprint on this planet to make better action:</p>
            <ul>
              <li>
                Charitable donations to multiple organisms that fight against
                forced labour and provide education up to 20ETH
              </li>
              <li>
                Reward top holders with immersive French luxurious jewellery
                experiences
              </li>
              <li>
                Discord community challenges rewards for numerous contests
              </li>
              <li>Community vote on the scalability of the project</li>
            </ul>
          </div>
          {/* stage 3 */}
          <div className="stage three">
            <h3>Stage 3 - Airdrops</h3>
            <p>
              Thank the community for allowing us to go this far, rewarding them
              with:
            </p>
            <ul>
              <li>Luxury event access</li>
              <li>NFT’s</li>
              <li>Coupons</li>
              <li>Gift cards</li>
              <li>Personalized jewellery classes with experts</li>
              <li>Personalized auctions</li>
              <li>
                The reward of your choice for top Holder in real-life market
                value – Rewards page coming soon
              </li>
            </ul>
          </div>
          {/* stage 4 */}
          <div className="stage four">
            <h3>Stage 4 – Usability, V2 design, scalability, transparency</h3>
            <p>A 100% sold out will start the process for the V2</p>
            <ul>
              <li>Metaverse integration</li>
              <li>V2 crafting tool: </li>
              <li>
                This tool will be a workshop to make personalized jewellery for
                the Holder by a luxury brand with burn technology. Holders will
                be able to craft their pieces in collaboration with a luxury
                brand designer in exchange for the burn of an original gem.
              </li>
              <li>Appropriation of the community voted usability</li>
              <li>Expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <div id="Team" className="spacer" />
      <section className="team">
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
        <h2>Team</h2>

        {/* member 1 */}
        <div className="member">
          <img src="./img/ppl1.png" alt="member" />
          <div className="description">
            <h3>Simon Assayag – CEO</h3>
            {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p> */}
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* member 2 */}
        <div className="member">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Adrien Garnier - Co-Founder</h3>
            {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p> */}
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* member 3 */}
        <div className="member">
          <img src="./img/ppl3.png" alt="member" />
          <div className="description">
            <h3>Hugo Cotelle – Co-Founder</h3>
            {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p> */}
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* member 4 */}
        {/* <div className="member">
          <img src="./img/ppl3.png" alt="member" />
          <div className="description">
            <h3>Cathy Dolle - Graphic Designer</h3>
            <a className="arrow" href="https://twitter.com/cathydolle">
              Twitter
            </a>
          </div>
        </div> */}

        {/* Little team */}
        {/* member 4 */}
        {/* <div className="member little">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div> */}
        {/* member 5 */}
        {/* <div className="member little">
          <img src="./img/ppl1.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div> */}
        {/* member 6 */}
        {/* <div className="member little">
          <img src="./img/ppl3.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div> */}
        {/* member 7 */}
        {/* <div className="member little">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div> */}
      </section>

      {/* FAQ */}
      <div id="FAQ" className="spacer" />
      <section className="faq">
        <h2>FAQ</h2>
        <div className="question">
          <h4>Will you be able to retrieve your NFTs into genuine stones?</h4>
          <p>
            We will be actively working with French Jewelers to reward the
            community with jewels and gemstones, but it is not the directive of
            this project. We want our digital assets to stand in the sector
            differently from physical assets.
          </p>
        </div>
        <div className="question">
          <h4>
            What is the difference between price and real-life market value
            (RLMV)?
          </h4>
          <p>
            The (RLMV) is a standard we chose to compare the rarity of each NFT
            to their estimated value in a physical cut stone. These do not mean
            that they are interchangeable with genuine stones and are only used
            to help holders get a better idea of the rarity of their stones
            while also giving them a fun fact about their NFT.
          </p>
        </div>
        <div className="question">
          <h4>How can I get ahold of a MetaStone NFT?</h4>
          <p>
            Two steps are crucial before trying to purchase any NFT, buying
            cryptocurrencies, and in this case, Ethereum and creating a crypto
            wallet. After acquiring Ethereum or any cryptocurrencies, you must
            create a crypto wallet, such as MetaMask or Coinbase Wallet and
            transfer your Ethereum to your MetaMask wallet. Once you have your
            MetaMask or Coinbase Wallet funded, you can connect that Wallet to
            MetaStone and purchase your MetaStone NFT. Once these steps are
            done, you must link your Wallet to our website and access the mint
            page by clicking the "Get your stone" buttons on our home page.
            These will lead you to our mint page, where you will be able to mint
            the amount of MetaStone NFTs you desire. If none are available for
            mint on our website, you can visit our OpenSea and bid on the
            secondary market.
          </p>
        </div>
        <div className="question">
          <h4>Do I need to mint an NFT to get access to rewards?</h4>
          <p>
            No, only holders get access to rewards. These will be done on our
            website directly.
          </p>
        </div>

        <img className="lueur" src="/img/lueur.svg" alt="intro" />
      </section>

      <div className="spacer" />
      <div className="spacer" />

      <Footer />
    </div>
  )
}

export default Home
