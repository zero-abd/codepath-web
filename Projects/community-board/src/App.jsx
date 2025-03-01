import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import EventGrid from './components/EventGrid'
import Footer from './components/Footer'
import { events } from './data/events'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Filter onSearchChange={setSearchTerm} />
        {filteredEvents.length > 0 ? (
          <EventGrid events={filteredEvents} />
        ) : (
          <p className="no-events">No events found matching your search.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
