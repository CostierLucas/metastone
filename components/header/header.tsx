import Link from "next/link";
import ConnectWallet from "../connectWallet/connectWallet";

const Header: React.FC = () => {
  return (
    <header id="Story">
      <Link href="/">
        <a>
          <img src="/img/logo.svg" alt="logo" />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/#Story">
              <a>Story</a>
            </Link>
          </li>
          <li>
            <Link href="/#Gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/#Roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/#Team">
              <a>Team</a>
            </Link>
          </li>
          <li>
            <Link href="/#FAQ">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/mint">
              <a>Mint</a>
            </Link>
          </li>
          <li>
            <Link href="/holders">
              <a>Holder's aera</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
