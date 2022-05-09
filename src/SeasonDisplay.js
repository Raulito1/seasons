import React from 'react';

const seasonConfig = {
   summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
   },
   winter: {
      text: "Burr, it's chilly!",
      iconName: 'snowflake'
   }
}

const determineSeason = (lat, month) => {
   if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
   } else {
      return lat > 0 ? 'winter' : 'summer';
   }
}
const SeasonDisplay = (props) => {
   const season = determineSeason(props.lat, new Date().getMonth());
   const { text, iconName } = seasonConfig[season];
   return (
      <div>
         <i className={`${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`${iconName} icon`} />
      </div>
   )
};

export default SeasonDisplay;
