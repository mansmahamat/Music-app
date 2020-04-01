import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home';
import DetailsAlbums from './components/detailsAlbum'



const Routes = () => {
    return(
        <Switch className="">
            <Route path="/" exact component={Home}/>
            <Route path="/details/:id" exact component={DetailsAlbums}/>
        </Switch>
    )
}


export default Routes;