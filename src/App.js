import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Joyride from 'react-joyride'



function App() {
  const TOUR_KEY = 'hasSeenTour'
  const [run, setRun] = useState(false);
  const steps = [
    {
      target: '.App-logo',
      content: 'Welcome to your app tour',
      disableBeacon: true
    },
    {
      target: '.info',
      content: 'Here is the core information part'
    },
    {
      target: '.App-link',
      content: 'Click this to navigate to official website of react'
    }
  ]  
  useEffect(() => {
    if (!localStorage.getItem(TOUR_KEY)) {
      setRun(true)
    }
  }, [])

  const handleCallback = (data) => {
    const finishedStatuses = ['finished', 'skipped']
    if (finishedStatuses.includes(data.status)) {
      localStorage.setItem(TOUR_KEY, 'true')
      setRun(false)
    }
  }
  return (
    <div className="App">
       <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        scrollToFirstStep
        callback={handleCallback}
        styles={{
          options: {
            arrowColor: '#fff',
            backgroundColor: 'white',
            overlayColor: 'rgba(0, 0, 0, 0.6)',
            primaryColor: '#FFD700',
            textColor: 'black',
            width: 300,
            zIndex: 1000
          },
          tooltipContainer: {
            textAlign: 'center',
            borderRadius: '8px'
          },
          buttonNext: {
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '4px'
          },
          buttonBack: {
            marginRight: '8px',
            color: 'black'
          }
        }}
        locale={{
          back: 'Back',
          next: 'Next',
          skip: 'Skip',
          last: 'End'
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p className="info">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
