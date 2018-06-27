import React, { Component } from "react";
import API from "../utils/API";

import moment from 'moment';
import { Panel } from 'react-bootstrap';

import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

class Home extends Component {
    state = {
        results:[],
        startDate:moment().format('YYYY')-2,
        endDate: moment().format('YYYY'),
        topic: "cats"
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        // get values from form
        var data = {
            startDate: document.getElementById("startDate").value,
            endDate: document.getElementById("endDate").value,
            topic: document.getElementById("search-topic").value
        }
        console.log(data)
        // set state
        this.setState({
            startDate: data.startDate,
            endDate: data.endDate,
            topic:data.topic
        })

        this.getArticles(data);
      
      
        // clear form
        document.getElementById("startDate").value = this.state.startDate;
        document.getElementById("endDate").value = this.state.endDate;
        document.getElementById("search-topic").value = this.state.topic;
      
    }

    getArticles = (data)=>{
          // make api call
        API.scrapeArticle(data)
        .then(results=>{
             // set state with results
            this.setState({
                results: results.data
            })
            console.log(this.state.results)
        })
        .catch(err => {
            console.log("err",err);
        })
    }
   

    handleSave = () => {
        // do something with the article
        // get all info off article
        // make api call
        // remove artcle from page
        // disable saved button
    }

    render() {
        return (
            <div>
                <div>
                    <Panel>
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">SEARCH</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <SearchForm startDate={this.state.startDate} endDate={this.state.endDate} handleSubmit={this.handleSubmit} topic={this.state.topic} handleChange={this.handleChange}/>
                        </Panel.Body>
                    </Panel>
                </div>
                <div>
                    <Panel>
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">RESULTS</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        <SearchResults results={this.state.results}/>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        )
    }
};

export default Home;
