import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SavedResults from "../components/SavedResults"
import Footer from "../components/Footer"
class Saved extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
        API.getBooks()
        .then(res => { console.log(res.data); this.setState({ savedBooks: res.data }) })
        .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.savedBooks)
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <h3>Books that You Saved</h3>
                    <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
                <Footer />
            </Container>
        )
    }
}



export default Saved