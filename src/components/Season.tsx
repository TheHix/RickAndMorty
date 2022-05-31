import React from 'react';
import { IEpisode } from '../Types/episodes';
import SeasonEpisode from './SeasonEpisode';
interface SeasonProps {
    seasonNumber:string
    seasoneInfo: IEpisode[]
}
const Season:React.FC<SeasonProps> = ({seasonNumber, seasoneInfo}) => {
    return (
        <div className='season'>
            <div className="season__title">Сезон {seasonNumber}</div>
            <div className="season__episodes">
                {seasoneInfo.map((episode: IEpisode, index:number) => {
                    return <SeasonEpisode item = {episode} number = {index+1} key={episode.episode}/>
                })}
            </div>
        </div>
    );
};

export default Season;