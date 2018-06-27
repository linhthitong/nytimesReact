import React from "react";
import "./style.css";

import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import YearPicker from "react-year-picker";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
    <form>
         
        <FormGroup
            controlId="searchInput"
        >
            <ControlLabel>TOPIC</ControlLabel>
            <FormControl
                name="topic"
                id="search-topic"
                type="text"
                placeholder="Enter topic"
                defaultValue={props.topic}
                minLength="1"
               
            />
            <ControlLabel>Start Date</ControlLabel>
            <select class="form-control" id="startDate" defaultValue={props.startDate}>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
            </select>
            <ControlLabel>End Date</ControlLabel>
            <select class="form-control" id="endDate" defaultValue={props.endDate}>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
            </select>

            <FormControl.Feedback />
        </FormGroup>
        <Button type="button" onClick={props.handleSubmit}>Submit</Button>
        
  </form>
);

export default SearchForm;
