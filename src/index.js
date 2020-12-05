import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App
        stories={getReadableStories(store.getState())}
        onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })} />
  </React.StrictMode>,
  document.getElementById('root')
);
