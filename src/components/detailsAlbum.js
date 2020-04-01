import React, {Component} from 'react';
import * as actions from './actions/index';
import Header from './widget/header';

class DetailsAlbum extends Component {
    state = {
        album : '',
        tracks : []
    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                tracks : album.tracks.data
            });
        })
    }
    renderAlbum = () => {
        const {album} = this.state;
        return(
                <div className="col-md-12 mb-3">
                                <div className="card border-warning">
                                   <img src={album.cover_big} alt="" className="card-img-top"/>
                                   <div className="card-body">
                                            <span className="text-warning">Sortie : {album.release_date}</span>
                                        <div className="card-title">
                                        {album.title}
                                        </div>
                                   </div>
                                  
                                </div>
                            </div> 
    )
}


    render(){
        console.log(this.state);
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header/>
                        <div className="row">
                            {this.renderAlbum()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsAlbum;