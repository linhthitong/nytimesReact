import React, { Component } from "react";
import API from "../utils/API";

import Moment from 'moment';
import { Panel } from 'react-bootstrap';

class Home extends Component {
    state = {
        results:[],
        startDate: '2016',
        endDate: Moment.year()
    };

    handleSubmit = () =>{
        // get values from form
        // set state
        // make api call
        // clear form
        // set state with results
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
                        {this.state.endDate}
                        </Panel.Body>
                    </Panel>
                </div>
                <div>
                    <Panel>
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">RESULTS</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        )
    }
};

export default Home;
