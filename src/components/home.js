import React, {Component} from 'react';
import Header from './widget/header';
import * as actions from './actions/index';



class Home extends Component {

    state = {
        albums : []
    }

    componentDidMount(){
        actions.getAlbums().then(item => this.setState({
            albums : item
        }));
    }

    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item, index) =>(
                <div key={index} className="col-md-4 mb-2">
                                <div className="card border-warning">
                                   <img src={item.album.cover_big} alt="" className="card-img-top"/>
                                   <div className="card-body">
                                            <span className="text-success">Drake</span>
                                        <div className="card-title">
                                            album title
                                        </div>
                                   </div>
                                   <div className="card-footer">
                                       <div className="links">
                                           <a href="#"><i className="fas fa-info text-warning"></i></a>
                                           <a href="#"><i className="fas fa-heart text-warning"></i></a>
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

export default Home;