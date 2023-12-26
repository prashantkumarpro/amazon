import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './components/Context/ProductContext.jsx'
import { FilterDataProvider } from './components/Context/FilterProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <FilterDataProvider>

      <App />
    </FilterDataProvider>
  </DataProvider>,
)
