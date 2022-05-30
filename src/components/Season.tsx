import React from 'react';
import SeasonEpisode from './SeasonEpisode';
interface SeasonProps {
    seasonNumber:string
}
const Season:React.FC<SeasonProps> = ({seasonNumber}) => {
    return (
        <div className='season'>
            <div className="season__title">Сезон {seasonNumber}</div>
            <div className="season__episodes">
            </div>
        </div>
    );
};

export default Season;