import React, {Suspense} from "react";
import {Link} from "react-router-dom";

const PodcastList = props => {

    const {podcasts, filterText, loadingStatus} = props;

    const filteredPodcast = podcasts.filter(function (podcast) {
        return podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    })

    return(
        <>
            {loadingStatus ? (
                <h3>Loading...</h3>
            ) : (
                <ul className="podcast-list">
                    {filteredPodcast.map(podcast => (
                        <Suspense
                            key={podcast.id}
                            fallback={<div key={podcast.id}>Loading...</div>}
                        >
                        <li>
                            <img className="thumbnail" src={podcast.thumbnail} alt=""/>
                            <div className="info">
                                <h3>{podcast.title}</h3>
                                <a className="link" href={podcast.url} target="blank">
                                    {podcast.url}
                                </a>
                                <div style={{marginTop: "7px"}}>
                                    <Link to={"/"+podcast.id}>
                                        Lihat >>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        </Suspense>
                    ))}
                </ul>
            )}
        </>
    )
}

export default PodcastList;