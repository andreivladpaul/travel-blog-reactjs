import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './assets/data'

function App() {
  const trip = data.map(trip => {
    return (
      <Card title= {trip.title}
            location = {trip.location}
            googleMapsUrl = {trip.googleMapsUrl}
            startDate= {trip.startDate}
            endDate= {trip.endDate}
            imageUrl= {trip.imageUrl}
            description = {trip.description}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {trip}
    </div>
  );
}

export default App;
