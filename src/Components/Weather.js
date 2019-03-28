import React from 'react';

const Weather = props => (
    <div className="weather__info">
           
         { 
             props.city && props.country && <p className="weather__key">Location:- 
             <span className="weath__values">{ props.city }</span>
             </p>
             }
         {
              props.temperature && <p className="weather__key"> Temperature:- 
              <span className="weath__values">{ props.temperature } </span> 
              </p> 
              }
         { 
             props.humidity && <p className="weather__key"> Humidity:- 
             <span className="weath__values">{ props.humidity } </span>
             </p> 
             }
        {
             props.description && <p className="weather__key">Conditions:- 
             <span className="weath__values">{ props.description }</span>
             </p> 
             }
        {
             props.error && <p class="weath__error"> { props.error }</p> 
             }
    </div>
)
export default Weather;