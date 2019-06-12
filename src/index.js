import React from 'react';
import ReactDOM from 'react-dom';
import './responsive.css'
import './notes_responsive.css'
import './notes.css'
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import NotesApp from './notes_components/NotesApp'



library.add(faWindowClose)

ReactDOM.render(<NotesApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
