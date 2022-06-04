import { Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import BookInput from './components/BookInput';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
          <BookInput />
        </Route>
        <Route path="/catigories">
          <Categories />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
