import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home/Home";
import Study from "./Study/Study";
import CreateDeck from "./Create/CreateDeck";
import Deck from "./Deck/Deck";
import EditDeck from "./EditDeck/EditDeck";
import AddCard from "./AddEditCards/AddCard";
import EditCard from "./AddEditCards/EditCard";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
