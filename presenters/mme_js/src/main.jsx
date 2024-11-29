import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


window.mme.presenters.mme_js = function(element, items) {
	createRoot(element).render(
	  <StrictMode>
		 <App />
	  </StrictMode>,
	)
}



