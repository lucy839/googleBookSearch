import React from "react";
import { Row, Col } from "../Grid"

// Display of saved results
const SavedResult = props => {
    // if there is no books saved, display this
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h5>No Books Saved</h5>
                </div>
            </div>
        </div>
    ) : (
            // else display books saved
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        {props.savedBooks.map(savedbook => {
                            return (
                                <li className="saved-list list-group-item">
                                    <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                        <Col size="2" className="image">
                                            <img src={savedbook.image} alt={savedbook.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol" />
                                        <Col size="9" className="info">
                                            <Row>
                                                <h2 className="title">{savedbook.title}</h2>
                                            </Row>
                                            <Row>
                                                <h3 className="author">{savedbook.authors}</h3>
                                            </Row>
                                            <Row>
                                                <p className="description">{savedbook.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="delete btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                            Delete
                                    </button>
                                        <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
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

export default SavedResult