import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Results from "../components/Results"
import Footer from "../components/Footer"
import SearchForm from "../components/SearchForm";

// Search book page
class Books extends Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          // If there are results, map through results and put it in the object
          let results = res.data.items
          results = results.map(result => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          this.setState({ books: results, error: "" })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    event.preventDefault();

    // Look for the book with id that is clicked to be saved, and save that book into database
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook({
      title: savedBooks.title,
      author: savedBooks.authors,
      description: savedBooks.description,
      image: savedBooks.image,
      link: savedBooks.infoLink
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  // Render the search and results
  render() {
    return (
      <Container fluid>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <h3>Search Results</h3>
          <Results books={this.state.books} handleSavedButton={this.handleSavedButton} />
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Books;
