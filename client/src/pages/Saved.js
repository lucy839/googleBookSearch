import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SavedResults from "../components/SavedResults"
import Footer from "../components/Footer"

class Saved extends Component {
  state = {
    books: []
  };

  //when this component mounts, grab all books that were save to the database 
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Function to remove book by id
  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err))
  }

  // Render the books saved
  render() {
    console.log(this.state.savedBooks)
    return (
      <Container fluid className="container">
        <Jumbotron />
        <Container>
          <h3>Books that You Saved</h3>
          <SavedResults savedBooks={this.state.books} handleDeleteButton={this.handleDeleteButton} />
        </Container>
        <Footer />
      </Container>
    )
  }
}



export default Saved