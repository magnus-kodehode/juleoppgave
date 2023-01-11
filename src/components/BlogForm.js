import React, { useState } from 'react'


function BlogForm(props) {

const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [timestamp, setTimestamp] = useState('')

function handleSubmit() {
    
    // Generate timestamp for ID
    const id = new Date().getTime()
    setTimestamp(id)

    //Prevent the user from being able to spam the button and make empty posts with timestamps
    if (!title || !content) {
        alert('Vennligst fyll inn navn og julehilsen først!')
        return
    }

    // Store title, content, and timestamp in a JSON object
    const data = {
      id,
      title,
      content,
      timestamp,
    }

    // Save the data to local storage
    localStorage.setItem(id, JSON.stringify(data))
    props.setNewCardAdded(true)//Change boolean to let CardsList useEffect know a card has been added
  }

  return (
    <form className='blogForm' >
      <label>
        Navn:
        <input
          className='form-navn'
          type='text'
          value={title}
          placeholder='Skriv navnet ditt her'
          autoFocus
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Julehilsen:
        <textarea
          className='form-textarea'
          value={content}
          placeholder='Skriv din hilsen'
          onChange={(event) => setContent(event.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleSubmit} className='form-submit-btn' type='submit'>Lever Hilsen 🎅</button>
    </form>
  )
}

export default BlogForm
