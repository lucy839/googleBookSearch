import React from "react";
import { Input, FormBtn } from "../Form";

// import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For Book</h3></label>
                <br></br>
                <Input
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                placeholder="Enter Book's Name"
              />
            </div>
            <FormBtn
                onClick={props.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
        </form>
    )
}
export default SearchForm