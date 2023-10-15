import Dog1 from "./image/collectionDog1.png";
import Dog2 from "./image/colectDog2.png";
import Dog3 from "./image/colectDog3.png";
import Zambariq from "./image/collectionzambarig1.png";
import Zambariq2 from "./image/colectZambarig2.png";
import Zambariq3 from "./image/colectZambarig3.png";
import Robot1 from "./image/colictRobot1.png";
import Robot2 from "./image/colectRobot2.png";
import Robot3 from "./image/colectRobot3.png";
import userSmal from "./image/AssetUserImgSmall.svg"
import "../style/collection.css"

const Collection = () => {
  return (
    <div className="Collection">
      <p className="Collectp1">Trending Collection</p>
      <p className="collectP2">
        Checkout our weekly updated trending collection.
      </p>
      <div className="collectBox">
        <div className="collectBox1" >
          <img src={Dog1} alt="rasm" loading="lazy" />
          <div>
            <img src={Dog2} alt="rasm" loading="lazy" />
            <img src={Dog3} alt="rasm" loading="lazy" />
            <button>1025+</button>
          </div>
          <p>DSGN Animals</p>
          <span><img src={userSmal} alt="rasm" /> MrFox</span>
        </div>
        <div className="collectBox1" id='noneBox2' >
          <img src={Zambariq} alt="rasm" loading="lazy" />
          <div>
            <img src={Zambariq2} alt="rasm" loading="lazy" />
            <img src={Zambariq3} alt="rasm" loading="lazy" />
            <button>1025+</button>
          </div>
          <p>Magic Mushrooms</p>
          <span><img src={userSmal} alt="rasm" /> Shroomie</span>
        </div>
        <div className="collectBox1 " id="noneBox" >
          <img src={Robot1} alt="rasm" loading="lazy" />
          <div>
            <img src={Robot2} alt="rasm" loading="lazy" />
            <img src={Robot3} alt="rasm" loading="lazy" />
            <button>1025+</button>
          </div>
          <p>Disco Machines</p>
          <span><img src={userSmal} alt="rasm" /> BeKind2Robots</span>
        </div>
      </div>
    </div>
  );
};

export default Collection