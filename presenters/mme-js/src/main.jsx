import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { wasm_mme_init } from 'mme'

wasm_mme_init()

// setup comandr widgets
window.addEventListener("DOMContentLoaded", function(e){
	console.log("dom content loaded")
})

console.log("ready:", document.readyState)

window.comandr.fns.main_show = function() {
	let input = document.getElementsByClassName("comandr-main")[0]
	input.focus()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
