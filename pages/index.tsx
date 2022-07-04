import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="Wrapper">
      {/* Header */}
      <header id="Story">
        <img src="/img/logo.svg" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#Story">Story</a>
            </li>
            <li>
              <a href="#Gallery">Gallery</a>
            </li>
            <li>
              <a href="#Roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Intro */}
      <section className="intro">
        <div className="visual">
          <img className="preview" src="/img/intro.png" alt="intro" />
        </div>
        <div className="description">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
          <a className="arrow" href="#Gallery">
            Get your stone
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores
        </p>
        <a className="arrow" href="#Gallery">
          Get your stone
        </a>
        {/* Slider */}
        <div className="slider">
          <img src="/img/stones/blue.gif" alt="stone" />
          <img src="./img/stones/pink.gif" alt="stone" />
          <img src="./img/stones/metallic_sand.gif" alt="stone" />
          <img src="./img/stones/zen_garden.gif" alt="stone" />
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
            <h3>Stage 1</h3>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          {/* stage 2 */}
          <div className="stage two">
            <h3>Stage 2</h3>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          {/* stage 3 */}
          <div className="stage three">
            <h3>Stage 3</h3>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          {/* stage 4 */}
          <div className="stage four">
            <h3>Stage 4</h3>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
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
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* member 2 */}
        <div className="member">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* member 3 */}
        <div className="member">
          <img src="./img/ppl3.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>

        {/* Little team */}
        {/* member 4 */}
        <div className="member little">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>
        {/* member 5 */}
        <div className="member little">
          <img src="./img/ppl1.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>
        {/* member 6 */}
        <div className="member little">
          <img src="./img/ppl3.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>
        {/* member 7 */}
        <div className="member little">
          <img src="./img/ppl2.png" alt="member" />
          <div className="description">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            <a className="arrow" href="#Gallery">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="FAQ" className="spacer" />
      <section className="faq">
        <h2>FAQ</h2>
        <div className="question">
          <h4>Question 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt{" "}
          </p>
        </div>
        <div className="question">
          <h4>Question 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>
        <div className="question">
          <h4>Question 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>
        <div className="question">
          <h4>Question 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>
        <img className="lueur" src="/img/lueur.svg" alt="intro" />
      </section>

      <div className="spacer" />
      <div className="spacer" />

      {/* FOOTER */}
      <footer>
        {/* network */}
        <div className="categorie">
          <h4>Network</h4>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>

        <div className="categorie">
          <h4>Something</h4>
          <ul>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </div>
        <div className="line" />
        <div className="underline">
          <p>© 2022 METASTONE</p>
          <div className="social">
            <a href="#twitter">twitter</a>
            <a href="#discord">discord</a>
            <a href="#discord">mail</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
