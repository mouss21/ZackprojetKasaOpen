import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Collapse from  "../Components/Collapse";
import Carrousel from  "../Components/Carrousel";
import records from "../Datas/logements.json"
import "../Styles/Cards.css";

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
  // récupère l'ID de l'URL
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get('_id'));
  
  // cherche l'id dans le fichier logements.json
  const record = records.find(element => element.id === idLogement)
  
  
 

  // récupère la liste des équipements
  const equipements = record.equipments.map((element, index) => (
        <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
      ))
  

  return (
      <div className='loge'>

              {/* carousel d'images */}
              <Carrousel pictures={record.pictures}/>

              {/* 1 - affiche le titre, l'emplacement et les tags */}
              <div className='ficheLogement'>
                  <div className='div-description'>
                      <h1>{record.title}</h1>
                      <h4>{record.location}</h4>
                      <div className='div-tags'>
                          { record.tags.map((element, index) => {
                              return(<p className='tags' key={"tags-"+index}>{element}</p>)
                          })}
                      </div>
                  </div>

                  {/* 2 - Affiche le nom du propriétaireet sa photo */}
                  <div className='bloc-stars'>
                      <div className='div-etoiles'>
                          <p>{record.host.name}</p>
                          <img src={record.host.picture} alt={record.title} />
                      </div>
                      
                      {/* 3 - Met et colorie les étoiles */}
                      <div className='stars'>
                          {
                              arrayStars.map(element => {
                                  const nbreEtoiles = parseInt(record.rating)
                                  return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                              })
                          }
                      </div>
                  </div>
              </div>


              {/* affiche la description et les équipements */}
              <div className='collapseLogement'>
                  <Collapse title="Description" content={record.description} />
                  <Collapse title="Equipements" content={equipements} />
              </div>
      </div>
  )
}

export default Card