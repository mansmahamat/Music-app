import React, {Component} from 'react';
import Header from './widget/header';
import * as actions from './actions/index';
import {Link} from 'react-router-dom';
import './home.css'



class FavouritesAlbums extends Component {

    state = {
        albums : []
    }


    componentDidMount(){
        let favourites = actions.getFavouritesAlbums();

        this.setState({
            albums : JSON.parse(favourites)
         
        })
    }



    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item, index) =>(
                <div key={index} className="col-md-4 mb-2">
                                <div className="card border-warning">
                                   <img src={item.album.cover_big} alt="" className="card-img-top"/>
                                   <div className="card-body">
                                            <span className="text-warning">
                                                {item.artist.name}
                                            </span>
                                        <div className="card-title">
                                        {item.title}
                                        </div>
                                   </div>
                                   <div className="card-footer">
                                       <div className="links">
                                           <Link to={`/details/${item.album.id}`} className="link"><i className="fas fa-music text-warning"></i></Link>
                                          {/* <a onClick={() =>this.deleteFav()} className="link"><i className="fas fa-heart text-danger"></i></a>*/}
                                       </div>
                                   </div>
                                </div>
                            </div>
            ))
        :null;
    }

    render(){
        console.log(this.state)
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FavouritesAlbums;