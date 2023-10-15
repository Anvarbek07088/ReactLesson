import Eye from "./image/Eye.svg"
import DiscoverAvatar2 from "./image/AvatarDiscover2.svg"
import DiscoverData from "../--mockData__/DiscoverData"
import "../style/Discover.css"

const Discover=()=>{
    return <div className="Discover">
     <div className="discoverBtnText">
        <div className="discoverBtnText1">
            <p>Discover More NFTs</p>
            <p>Explore new trending NFTs</p>
        </div>
        <div className="discoverBtnText2">
            <button><img src={Eye} alt="rasm" /> See All</button>
        </div>
     </div>
     <div className="discoverBox">
      {DiscoverData.map((e)=>{
       return <div className="discoverBox1" key={e.id} id={e.id==3?"none":'sss'}>
            <div className="disBox1Img">
                <img src={e.img} alt="rasm" />
            </div>
            <div className="dicBox1Tex">
                <p>{e.name}</p>
                <p><img src={DiscoverAvatar2} alt="Rasm" /> {e.userName}</p>
                <p><span>Price</span><span>{e.price}</span></p>
                <p><span>1.63 ETH</span><span>0.33 wETH</span></p>
            </div>
        </div>
      })}
     </div>
    </div>
}
export default Discover