import React from "react";
import Featurecard from './Featurecard';
import featureimage from '../../images/feature_1.gif'
import featureimage2 from '../../images/feature_2.png'
import featureimage3 from '../../images/feature_3.gif'
function Feature(){
  return (
    <div id='features'>
      <div className="a-container">
        <Featurecard image={featureimage} title='SHARE CONTENT'/>
        <Featurecard image={featureimage2} title='VISIT MARKETPLACE'/>
        <Featurecard image={featureimage3} title='ADOPT A PET'/>
      </div>

    </div>
  )
}

export default Feature;