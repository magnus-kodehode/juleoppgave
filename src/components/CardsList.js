import { useState, useEffect } from 'react'

function CardsList(props) {
  const [cards, setCards] = useState([])  // Initialize empty array of cards
  useEffect(() => {
    // Get all keys in local storage
    const keys = Object.keys(localStorage)

    // Map keys to card objects and set cards state
    const cards = keys.map((key) => JSON.parse(localStorage.getItem(key)))
    setCards(cards)
  }, [props.newCardAdded])  //Run the effect every time a new card is added
  props.setNewCardAdded(false)//Set the new card boolean back to false after render is completed

  return (
    <div>
      {cards.map((card) => (
        <div className='card-wrapper'key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
          <p>{new Date(card.id).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

export default CardsList
