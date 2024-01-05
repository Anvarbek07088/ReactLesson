import NFT_MarketLogo from "./image/NFT Marketplace.png";
import btnUser from "./image/User.svg";
import RacetaImg from "./image/RocketLaunch.svg";
import headerImg from "./image/Imageheader1.png";
import userSmall from "./image/AssetUserImgSmall.svg";
import "../style/header.css";
import { useEffect, useState } from "react";

const Header = () => {
  let [folow1, setFolow1] = useState(0);
  let [folow2, setFolow2] = useState(0);

  useEffect(() => {
    const folowTimer1 = setTimeout(() => {
      if (folow1 == 240) {
        return () => clearTimeout(folowTimer1);
      }
      setFolow1(folow1 + 1);
    }, 1);
    const folowTimer2 = setTimeout(() => {
      if (folow2 == 100) {
        return () => clearTimeout(folowTimer2);
      }
      setFolow2(folow2 + 1);
    }, 4);
  });
  return (
    <>
      <nav>
        <div className="headerIcon">
          <img src={NFT_MarketLogo} alt="rasm" loading="lazy" />
        </div>
        <ul className="headerNavbar">
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Rankings</a>
          </li>
          <li>
            <a href="#">Connect a wallet</a>
          </li>
        </ul>
        <div>
          <button className="btnHeader">
            <img src={btnUser} alt="rasm" loading="lazy" /> Sign Up
          </button>
        </div>
      </nav>
      <div className="headerSection">
        <div className="headerText">
          <p className="headerP1">Discover digital art & Collect NFTs</p>
          <p className="headerP2">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <button className="btnHeader">
            <img src={RacetaImg} alt="rasm" loading="lazy" /> Get Started
          </button>
          <ul className="headerSecUl">
            <li>
              <p>{folow1}k+</p>
              <span>Total Sale</span>
            </li>
            <li>
              <p>{folow2}k+</p>
              <span>Auctions</span>
            </li>
            <li>
              <p>{folow1}k+</p>
              <span>Artists</span>
            </li>
          </ul>
        </div>
        <div className="headerImg">
          <img
            src={headerImg}
            alt="rasm"
            loading="lazy"
            className="headerImg1"
          />
          <p>Space Walking</p>
          <span>
            <img src={userSmall} alt="rasm" loading="lazy" /> Animakid
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
