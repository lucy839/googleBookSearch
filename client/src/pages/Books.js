import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import Results from "../components/Results"
import Footer from "../components/Footer"
import SearchForm from "../components/SearchForm";

class Books extends Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: "",
    // save:[]
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
          // store response in a array
          let results = res.data.items
          //map through the array 
          results = results.map(result => {
            //store each book information in a new object 
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
          // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ books: results, error: "" })
        }
      })
      .catch(err => this.setState({ error: err.items }));
    // .then(res => {console.log(res)})
    // if (this.state.title && this.state.author) {
    // API.saveBook({
    //   title: this.state.title,
    //   author: this.state.author,
    //   synopsis: this.state.synopsis
    // })
    //   .then(res => this.loadBooks())
    // .catch(err => console.log(err));
    // }
  };
  handleSavedButton = event => {
    // console.log(event)
    event.preventDefault();
    // console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    console.log(savedBooks)
    // this.setState({save:savedBooks})
    API.saveBook({
      // key: result.id,
      // id: result.id,
      title: savedBooks.title,
      author: savedBooks.authors,
      description: savedBooks.description,
      image: savedBooks.image,
      link: savedBooks.infoLink
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  // this.saveBooks(savedBooks);
  // API.saveBook(savedBooks)
  //     .then(res => {this.setState({ message: alert("Your book is saved") })})
  //     .catch(err => console.log(err))

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
              {/* <div className="form-group">
            <form>
            <label className="BookSearchLabel"><h3>Search For Book</h3></label>
            <br></br>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Enter Book's Name"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            </div> */}
            </Col>
          </Row>
        </Container>
        <br></br>

        <Container>
          <h3>Search Results</h3>
          {/* <Jumbotron> */}
          {/* <h1>Books On My List</h1> */}
          {/* / </Jumbotron> */}
          <Results books={this.state.books} handleSavedButton={this.handleSavedButton} />
          {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
        </Container>
        {/* </Row> */}
        <Footer />
      </Container>
    );
  }
}

export default Books;
