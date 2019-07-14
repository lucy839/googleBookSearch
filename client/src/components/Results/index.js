import React from "react";
import {Row, Col} from "../Grid"

const Results = props => {
    // If there is no results, display this
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h5> No Articles Searched </h5>
                </div>
            </div>
        </div>
    ) : (
            // else display results
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        <Col size="2" className="image">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="info">
                                            <Row>
                                                <h3 className="title">{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="author">{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p className="description">{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="savebtn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                                            <button className="view btn btn-success">
                                                View
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default Results; 