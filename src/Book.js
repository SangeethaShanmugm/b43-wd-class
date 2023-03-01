import React, { Component } from "react";

const mockUrl = "https://63fd8351c639f8563141f462.mockapi.io/books";

export default class Book extends Component {
  constructor() {
    super();
    this.state = {
      bookList: "",
    };
  }

  listBooks = (data) => {
    if (data) {
      return data.map((item, index) => {
        return (
          <div className="book-list" key={index}>
            <img className="book-poster" src={item.poster} alt={item.name} />
            <div className="book-spec">
              <h2 className="book-name">{item.name}</h2>
              <p className="book-rating">⭐{item.rating}</p>
            </div>
            <p className="book-summary">{item.summary}</p>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="book-container">
        {this.listBooks(this.state.bookList)}
      </div>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(mockUrl, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bookList: data });
        console.log(data);
      });
  }
}
