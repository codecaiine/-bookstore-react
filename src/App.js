import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import BookInput from './components/BookAdd';

function App() {
  return (
     <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
          <BookList />
          <BookInput />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
