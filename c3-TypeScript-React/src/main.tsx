import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 타입스크립트가 function App(): JSX.Element라고 타입을 추론할 수 있는 이유는? */}
    <App />
  </React.StrictMode>,
)
