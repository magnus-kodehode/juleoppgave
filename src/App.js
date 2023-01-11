import './App.css';
import { useState } from 'react'
import Nav from "./components/Nav"
import BlogForm from "./components/BlogForm"
import CardsList from './components/CardsList'

function App() {
//State passed through props to the components to allow useEffect to render cards when button is clicked
const [newCardAdded, setNewCardAdded] = useState(false)

  return (
    <div className='App'>
      <nav>
        <Nav />
      </nav>
      <main>
        <BlogForm 
        newCardAdded={newCardAdded}
        setNewCardAdded={setNewCardAdded}
        />
        <CardsList 
        newCardAdded={newCardAdded}
        setNewCardAdded={setNewCardAdded}
        />
      </main>
    </div>
  );
}

export default App
