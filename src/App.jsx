import { useState } from "react";
import reactLogo from "./assets/react.svg";
import starIcon from "./assets/icon-star.svg";
import thankYou from "./assets/illustration-thank-you.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [submittedForm, setSubmittedForm] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedForm(true);
  };

  return !submittedForm ? (
    <div className="App">
      <div className="card">
        <div className="card-star">
          <img src={starIcon} alt="star icon" />
        </div>
        <div className="card-header">How did we do?</div>
        <div className="card-body">
          {" "}
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="card-rating">
            {ratings.map((rating) => (
              <button type="button" onClick={() => setRating(rating)}>
                {rating}
              </button>
            ))}
          </div>
          <div className="card-submit">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="card">
        <div className="card-thank-you">
          <img src={thankYou} alt="thank you image" />
        </div>
        <div className="card-ratingSelected">
          You selected {rating} out of {ratings[ratings.length - 1]}
        </div>
        <div className="card-header-thank-you">Thank you!</div>
        <div className="card-body-thank-you">
          {" "}
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </div>
    </div>
  );
}

export default App;
