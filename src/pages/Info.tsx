import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterInstance from '../components/characters/characterInstance';
import { $characterUrls, getCharactersUrlsFx } from '../store/store';

<<<<<<< master
const info = () => {
    return (
        <main className='main'>

=======
const Info = () => {
    const characterUrls = useStore($characterUrls);
    const {id} = useParams();
    
    useEffect(() => {
        if (id !== undefined) {
            getCharactersUrlsFx(+id);
        }
    }, [id])
    return (
        <main className='main'>
            <div className="main__info info">
                <h1 className="info__title">Персонажи</h1>
                <div className="info__container container">
                    <div className="info__body">
                        {characterUrls.map((url:string, index:number) => {
                            
                            return <CharacterInstance key={index} url = {url}/>
                        })}
                    </div>
                    
                </div>
            </div>
>>>>>>> local
        </main>
    );
};

export default info;