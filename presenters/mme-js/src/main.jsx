import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MmeJs } from 'mme'
import { comandr_ui_init } from '/home/me/work/dr-comandr/src/ui/react/src/main.jsx';
import { get_mize } from '@c2vi/mize'

//console.log("wasm_bindgen", wasm_bindgen)

window.mme = new MmeJs()

const { JsInstance } = wasm_bindgen

get_mize()

wasm_bindgen().then(e => {
	console.log("wasm_bindgen done")
	window.mize = new JsInstance()

	createRoot(document.getElementById('root')).render(
	  <StrictMode>
		 <App />
	  </StrictMode>,
	)

	comandr_ui_init()

	try {
		window.comandr.fns.main_show = function() {
			let input = document.getElementsByClassName("comandr-main")[0]
			input.focus()
		}
	} catch (e) {
		console.log("comandr set main_show fn failed")
	}


})


//let result = mme.comandr_search("comandr")

//console.log("comandr result:", result)

// setup comandr widgets

