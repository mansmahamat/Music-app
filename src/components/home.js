import React, {Component} from 'react';
import Header from './widget/header';
import * as actions from './actions/index';
import Search from '../components/searchBar/searchBar';
import {Link} from 'react-router-dom';
import swal from '@sweetalert/with-react';
import './home.css'



class Home extends Component {

    state = {
        albums : []
    }

    componentDidMount(){
        actions.getAlbums().then(item => this.setState({
            albums : item
        }));
    }
    searchAlbums = (terms) => {
        actions.getAlbums(terms).then(item=> this.setState({
            albums : item    
        }))
    }

    addFavourites = (album) => {
        let oldFav = JSON.parse(localStorage.getItem('favourites')) || [];
        if(this.checkAlbum(oldFav,album)){
            swal({
                title : 'Erreur ❌ ',
                text : 'Album déja ajouté aux favoris',
                icon : 'warning'
            });
            return false;
        }
        oldFav.push(album);
        let fav = oldFav;
        localStorage.setItem('favourites', JSON.stringify(fav));
        swal({
            title : 'Super 🎵',
            text : 'Album ajoutés aux favoris',
            icon : 'success'
        });
    }

    checkAlbum = (albums,album)=>{
        let found = albums.some(function(item){
            return item.album.id === album.album.id
        });
        return found;
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
                                           <a onClick={() =>this.addFavourites(item)} className="link"><i className="fas fa-heart text-danger"></i></a>
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
                        <Search 
                        searchAlbums={this.searchAlbums}
                        />
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;