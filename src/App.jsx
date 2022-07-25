import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './json/users.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length) //calcular un numero random objeto y con floor redondear
    return arr[indexRandom]   
   
  }

  
  const userRandom = getRandomElement(users)
  const colorRandom = getRandomElement(colors)

  const [randomUser, setRandomUser] = useState(userRandom) //Crear un estado
  const [randomColors, setRandomColors] = useState(colorRandom) //Crear un estado

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll= () => {
    const userRandom = getRandomElement(users)
    const colorRandom = getRandomElement(colors)
    setRandomUser (userRandom)
    setRandomColors(colorRandom)
  }


  return (

    <div className="App" style={objStyle}>
      <QuoteBox randomUser = {randomUser} randomColors = {randomColors} getRandomAll= {getRandomAll}/>
    </div>
  )
}

export default App