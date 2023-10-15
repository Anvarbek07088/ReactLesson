import worksData from "../--mockData__/WoorksData";
import "../style/Works.css";
const Works = () => {
  return (
    <div className="Works">
      <p>How It Works</p>
      <p>Find Out How To Get Started</p>
      <div className="WorksBox">
        {worksData.map((e) => {
          return (
            <div className="workBox1" key={e.id}>
              <img src={e.img} alt="rasm" />
              <div>
                <p>{e.text1}</p>
                <p className="workBox1P2">{e.text2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
