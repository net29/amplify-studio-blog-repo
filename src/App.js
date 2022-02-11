import logo from './logo.svg';
import './App.css';

import PostCollection from './ui-components/PostCollection'

function App() {
  return (
    <PostCollection isPaginated itemsPerPage={3} />
  );
}

export default App;
