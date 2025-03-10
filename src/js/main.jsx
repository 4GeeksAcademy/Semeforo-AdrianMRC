import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import TrafficLight from './components/semaforo';

ReactDOM.createRoot(document.getElementById('root')).render(
    <TrafficLight/>

)
