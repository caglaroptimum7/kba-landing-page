// Test import of a JavaScript function, an SVG, and Sass
import { HelloWorld } from './js/HelloWorld'

import './styles/index.scss'



// Create heading node
const greeting = document.createElement('h1');
greeting.classList.add("logo");
greeting.textContent = HelloWorld()

// Create heading node
const comingSoon = document.createElement('h2');

comingSoon.textContent = "Our Website is Under Construction"

// Create heading node
const launchDate = document.createElement('h3');

launchDate.textContent = "Coming soon..."
// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root')
app.append(greeting,comingSoon,launchDate)