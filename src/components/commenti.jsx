import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CommentArea from "./recensione";

class Commenti extends Component() {
  state = {
    recensione: [],
  };

  GetComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        "Content-Type": "Application/JSON",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE2OTgzMjU2MzMsImV4cCI6MTY5OTUzNTIzM30.5luXjylsmji8ZOKbMl66Xq5gXr8CjBWL0LF1esqJSIw",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("erroreee");
        }
      })
      .then((data) => {
        this.setState({ recensione: data });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  ComponentDidMount() {
    this.GetComment();
  }
  render() {
    return (
      <ListGroup>
        {this.state.recensione.map((recensione) => {
          return <ListGroup.Item>{recensione.commento}</ListGroup.Item>;
        })}
      </ListGroup>
    );
  }
}

export default Commenti;
