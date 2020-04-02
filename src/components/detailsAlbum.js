import React, {Component} from 'react';
import * as actions from './actions/index';
import Header from './widget/header';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './detailsAlbums.css'

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

    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ? 
            tracks.map((track,index) =>(
                <figure key={index} className="figure">
                    <figcaption className="figure-caption text-xs-right text-warning">
                        Ecouter : {track.title}
                    </figcaption>
                    <AudioPlayer
    volume={0.1}
    src={track.preview}

  />
                   

                </figure>
    ))
    : null;
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
                                            <span className="text-warning">Album : {album.title}</span>
                                        </div>
                                   </div>
                                  <div className="card-footer">
                                      {this.renderTracks()}
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