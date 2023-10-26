import InputGroup from "react-bootstrap/InputGroup";
import { Form, Button } from "react-bootstrap";
import { Component } from "react";

class CommentArea extends Component {
  state = { recensione: { commento: "" } };

  InputChange = (property, value) => {
    this.setState({
      recensione: { [property]: value },
    });
  };

  ButtonSubmit = (e) => {
    e.PreventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.recensione),
      headers: {
        'Content-Type': "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE2OTgzMjU2MzMsImV4cCI6MTY5OTUzNTIzM30.5luXjylsmji8ZOKbMl66Xq5gXr8CjBWL0LF1esqJSIw",
      },
    })
      .then((res) => {
        if (res.ok) {
          this.setState({ recensione: { commento: "" } });
        } else {
          throw new Error("errore");
        }
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  render() {
    return (
      <>
      <div className="d-flex justify-content-between" key="horror.asin">
        <InputGroup>
          <InputGroup.Text>Lascia una Recensione</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            value={this.state.recensione.commento}
            onChange={(e) => {
              this.setState({
                recensione: {
                  ...this.state.recensione,
                  commento: e.target.value,
                },
              });
            }}
          />
        </InputGroup>
        <Button variant="outline-danger" onSubmit={this.BottonSubmit}>
          invio
        </Button>
      </div>
      </>
    );
  }
}

export default CommentArea;
