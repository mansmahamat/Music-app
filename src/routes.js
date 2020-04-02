import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home';
import DetailsAlbums from './components/detailsAlbum';
import FavouritesAlbums from './components/FavouritesAlbums';



const Routes = () => {
    return(
        <Switch className="">
            <Route path="/" exact component={Home}/>
            <Route path="/details/:id" exact component={DetailsAlbums}/>
            <Route path="/favourites" exact component={FavouritesAlbums}/>
        </Switch>
    )
}


export default Routes;