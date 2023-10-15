import data from "../--mockData__/CreatorsData";
import RacitaImg from "./image/RocketLaunch.svg";
import id1img from "./image/AvatarCreators1.png";
import "../style/Creators.css";
const Creators = () => {
  return (
    <div className="Creators">
      <div className="CreatorRow">
        <div className="CreatorsText">
          <p className="CreatorsText1">Top creators</p>
          <p className="CreatorsText2">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className="creatorsBtn">
          <button>
            <img src={RacitaImg} alt="rasm" /> View Rankings
          </button>
        </div>
      </div>
      <div className="creatorBox">
        {data.map((e) => {
          return (
            <div className="creatorBox1" key={e.id} id={e.id>6?"noneBox":""}>
              <div className="CrBox1ImgId">
                <span>{e.id}</span>
                <img src={id1img} alt="rasm" />
              </div>
              <div>
                <p className="CreatorUserNmae">{e.userName}</p>
                <p className="CreatorTotal">
                  Total Sales: <span>34.53 ETH</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Creators;
