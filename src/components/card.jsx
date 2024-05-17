import { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
const Card = () => {
  const dispatch = useDispatch();
  const randomColor = () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  };
  const combo = () => {
    getQuote().then((res) => {
      $("#row-1").fadeOut(300, () => {
        dispatch({ type: "NEWQUOTE", payload: res });

        dispatch({ type: "NEWCOLOR", payload: randomColor() });
        $("#row-1").fadeIn(300);
      });
    });
  };
  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    combo();
  }, []);
  return (
    <Container
      style={{ padding: "40px", minWidth: "550px", maxWidth: "550px" }}
      className=" bg-white"
      id="quote-box"
    >
      <Row id="row-1" style={{ color: useSelector((state) => state.color) }}>
        <h2 id="text">
          <i
            class="bi bi-quote h1"
            style={{ fill: useSelector((state) => state.color) }}
          ></i>
          {useSelector((state) => state.quote.content)}
        </h2>
        <p
          id="author"
          style={{ width: "fit-content" }}
          className="ms-auto me-3"
        >
          - {useSelector((state) => state.quote.author)}
        </p>
      </Row>
      <Row className="mb-2">
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?text=" +
            '"' +
            useSelector((state) => state.quote.content) +
            '" ' +
            useSelector((state) => state.quote.author) +
            "&hashtags=quotes"
          }
          className="d-flex justify-content-center align-items-center "
          style={{
            backgroundColor: useSelector((state) => state.color),
            width: "40px",
            borderRadius: "5px",
            padding: "0px",
          }}
        >
          <i
            style={{ color: "white", margin: "auto" }}
            className="bi bi-twitter h3"
          ></i>
        </a>

        <Button
          style={{ backgroundColor: useSelector((state) => state.color) }}
          className="col col-3 ms-auto me-3"
          id="new-quote"
          onClick={combo}
        >
          New Quote
        </Button>
      </Row>
    </Container>
  );
};

export default Card;
