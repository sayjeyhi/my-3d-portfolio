import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Loading } from './loading.jsx'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
