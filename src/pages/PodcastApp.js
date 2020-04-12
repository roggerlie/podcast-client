import React, {Component} from "react";
import Axios from "axios";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import PodcastList from "../components/PodcastList";

class PodcastApp extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      filterText: "",
      loadingStatus: true
    }
  }

  async componentDidMount() {
    const data = await Axios.get("https://json-server-heroku-svoqwyfacm.now.sh/podcasts");
    this.setState({
      data: data.data,
      loadingStatus: false
    })
  }

  handleFilterText = filterText => {
    this.setState({
      filterText: filterText
    })
  }

  render(){
    return(
        <>
          <Header/>
          <SearchForm
              filterText={this.state.filterText}
              handleFilterText={this.handleFilterText}
          />
          <PodcastList
            podcasts={this.state.data}
            filterText={this.state.filterText}
            loadingStatus={this.state.loadingStatus}
          />
        </>
    )
  }
}

export default PodcastApp;