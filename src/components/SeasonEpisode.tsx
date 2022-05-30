import React from 'react';

const SeasonEpisode = () => {
    return (
        <div className='season__episode episode'>
            <div className='episode__item episode__item-number'>{number} эпизод</div>
            <div className="episode__item">Дата выхода: {date}</div>
            <div className="episode__item">Количество персонажей: {numberOfCharacters}</div>
            <div className="episode__item">ID: {id}</div>
        </div>
    );
};

export default SeasonEpisode;