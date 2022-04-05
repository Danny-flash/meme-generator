import React, {useState, useEffect}from 'react'
import memesData from '../memesData'

const Meme = () => {


const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg"
})

const [allMeme, setAllMeme] = useState([ ])

   useEffect(() =>{
     fetch("https://api.imgflip.com/get_memes")
     .then(res => res.json())
     .then(data => setAllMeme(data.data.memes))
   }, [ ])

const handleChangeMeme = (e) =>{
    const randomNumber = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[randomNumber].url
   setMeme(prevMeme => ({
       ...prevMeme, 
       randomImage: url
   }))
}

const handleChange = (event) =>{
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme, [name]: value
  }))
}


  return (
      <main>
          <div action="" className='form'>
              <input type="text" 
              className='form__input'
              placeholder='Top text'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
              />
              <input type="text" 
               className='form__input'
               placeholder='Bottom text'
               name='bottomText'
               value={meme.bottomText}
               onChange={handleChange}
              />
              <button  className='form__button' onClick={handleChangeMeme}> Get a new meme image  🖼</button>
          </div>
          <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </main>
  )
}

export default Meme