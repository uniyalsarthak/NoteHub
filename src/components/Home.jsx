import Icon from "./Icon";

function Home({ createNote }) {
  return (
    <div className="home-screen">
      <div className="home-content">

        <h1 className="home-title">
          Welcome to NoteHub
        </h1>

        <p className="home-subtitle">
          Keep your ideas, tasks and notes organized in one place.
        </p>

        <button
          className="home-new-btn"
          onClick={createNote}
        >
          <Icon name="plus" size={20} />
          New Note
        </button>

      </div>
    </div>
  );
}

export default Home;