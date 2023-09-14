import './App.css';
import DetailForm from './components/DetailForm';
import { useState } from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';

function App() {
  const [details, setDetails] = useState({
    name: "",
    occasion: "",
    date: "",
    timing: "",
    address: ""
  })

  const [available, setAvailable] = useState(false);
  return (
    <>
    <div>
      <Navbar />
        <DetailForm details={details} setDetails={setDetails} setAvailable={setAvailable} />
      <Display details={details} available={available} />
     </div>
    </>
  );
}

export default App;
