import CatigoresData from "../--mockData__/brousCatigoresData"
import "../style/Categoreas.css"
const Categories=()=>{
    return <div className="Catedories">
      <p className="Categoriesp">Browse Categories</p>
      <div className="catigorisBox">
           {CatigoresData.map((e)=>{
            return <div className="catigoresBox1" key={e.id} id={e.id>4?"CatigorBoxNone":""}>
               <div className='catImgBox1' id={'cat-'+e.id}>
                 {e.url}
               </div>
               <p>{e.name}</p>
            </div>
           })}
      </div>
    </div>
}

export default Categories