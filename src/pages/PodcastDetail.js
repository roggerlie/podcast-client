import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import Header from "../components/Header";

class PodcastDetail extends Component {

    constructor() {
        super();
        this.state = {
            podcast: null,
            loadingStatus: true,
            podcastFound: false
        }
    }

    async componentDidMount() {

        const data = await Axios.get("https://json-server-heroku-svoqwyfacm.now.sh/podcasts")
        const id = this.props.match.params.id;
        const podcast = data.data.filter(function (podcastSelected) {
            return podcastSelected.id === parseInt(id);
        })

        if (podcast.length === 1){
            this.setState({
                podcast: podcast[0],
                podcastFound: true,
                loadingStatus: false
            })
        } else {
            this.setState({
                loadingStatus: false
            })
        }
    }

    render(){
        return(
            <>
                <Header/>
                {this.state.loadingStatus && <h3>Loading...</h3>}
                {this.state.loadingStatus === false &&
                    this.state.podcastFound === false &&
                    <h3>Podcast Not Found</h3>
                }
                {this.state.podcast !== null && (
                    <div className="detail-podcast">
                        <div className="thumbnail">
                            <img src={this.state.podcast.thumbnail} alt={this.state.podcast.title}/>
                        </div>
                        <div className="info">
                            <h3>{this.state.podcast.title}</h3>
                            <a className="link" href={this.state.podcast.url} target="blank">
                                {this.state.podcast.url}
                            </a>
                            <div style={{marginTop: "7px"}}>
                                <span>Episodes:</span>
                                {this.state.podcast.episodes &&
                                this.state.podcast.episodes.map(episode => (
                                    <audio
                                        controls key={episode.id}>
                                        <source src={episode.audio} type="audio/mp4"/>
                                        Your browser does not support the audio element.
                                    </audio>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <div style={{marginTop: "7px"}}>
                    <Link to={"/"}>
                        {"<<"} Kembali
                    </Link>
                </div>
            </>
        )
    }
}

export default PodcastDetail;