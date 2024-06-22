import { useState, useEffect } from "react";
import { getDogs } from "./dogapi";
import "./App.css";

const mapCommentsObjectToArray = (array) => {
  return array.map((item) => ({
    ...item,
    comments: [],
  }));
};

const App = () => {
  const [dogs, setDogs] = useState(() => mapCommentsObjectToArray([]));
  const [dogIndex, setDogIndex] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [loaded, setLoaded] = useState(false);

  const incrementPage = (e) => {
    e.preventDefault();
    setDogIndex(() => dogIndex + 1);
  };
  const decrementPage = (e) => {
    e.preventDefault();
    setDogIndex(() => dogIndex - 1);
  };

  const upvoteComment = (likedCommentString) => {
    setDogs((prevDogs) => {
      return prevDogs.map((dog, i) =>
        i === dogIndex
          ? {
              ...dog,
              comments: dog.comments.map((comment) =>
                likedCommentString === comment.string
                  ? {
                      ...comment,
                      upvotes: comment.upvotes + 1,
                    }
                  : comment,
              ),
            }
          : dog,
      );
    });
  };

  const onCommentInput = (e) => {
    setNewComment(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (newComment === "") {
      window.alert("Empty comments are not allowed!");
      return;
    }
    setNewComment("");
    setDogs((prevDogs) => {
      return prevDogs.map((dog, i) =>
        i === dogIndex
          ? {
              ...dog,
              comments: [...dog.comments, { string: newComment, upvotes: 0 }],
            }
          : dog,
      );
    });
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getDogs();
      setDogs(() => mapCommentsObjectToArray(data));
      setLoaded(true);
    }

    try {
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return loaded ? (
    <>
      <section>
        <div className="image">
          <img src={dogs[dogIndex].url}></img>
        </div>
        <div className="info">
          <p>{dogs[dogIndex].title}</p>
        </div>
        <div className="control-cluster">
          <div className="buttons">
            {dogIndex >= 1 ? (
              <button onClick={decrementPage}>{`<`}</button>
            ) : (
              <button>{`<`}</button>
            )}
            <span className="page-count">
              <p>{dogIndex + 1}</p>
            </span>
            {dogIndex < 9 ? (
              <button onClick={incrementPage}>{`>`}</button>
            ) : (
              <button>{`>`}</button>
            )}
          </div>
        </div>
      </section>
      <section className="comments">
        <h2>Post a comment!</h2>
        <form onSubmit={onFormSubmit}>
          <input
            id="comment-input"
            onInput={onCommentInput}
            value={newComment}
          ></input>
          <input type="submit" />
        </form>
        <h1>Comments:</h1>
        {dogs[dogIndex].comments.length > 0 ? (
          dogs[dogIndex].comments.map((comment) => (
            <span
              key={`${comment.string} + ${comment.upvotes}`}
              className="comment"
            >
              <p>{comment.string}</p>
              <span className="upvote-cluster">
                <p>{comment.upvotes}</p>
                <button
                  onClick={() => upvoteComment(comment.string)}
                >{`^`}</button>
              </span>
            </span>
          ))
        ) : (
          <p>No comments.</p>
        )}
      </section>
    </>
  ) : (
    <p>
      <em>loading...</em>
    </p>
  );
};

export default App;
