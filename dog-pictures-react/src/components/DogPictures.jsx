import { useEffect, useState } from 'react';

  // API: https://dog.ceo/dog-api/
const getDogPics = async () =>
{
    const response = await fetch( 'https://dog.ceo/api/breeds/image/random' );
    const dog = await response.json()
    return dog.message
}

function DogPictures()
{
    const [ dogPic, setDogPic ] = useState('');

    useEffect( () =>
    {
        getDogPics().then( pic => setDogPic ( pic ) )
    }, [] )
    
  return (
        <div className='dog-picture'>
            <img src={ dogPic } alt={ dogPic } />
            <button className='button' onClick={ async e => setDogPic( await getDogPics() ) }>🐶</button>
        </div>
  )
}

export default DogPictures;