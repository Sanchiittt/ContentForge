import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  }, []);

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter(a => a.type === filter);

  return (
    <div className="container">
      <h1>ContentForge</h1>
      <p className="subtitle">
        Original articles and AI-updated versions
      </p>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("original")}>Original</button>
        <button onClick={() => setFilter("updated")}>Updated</button>
      </div>

      {/* CARDS */}
      <div className="grid">
        {filteredArticles.map(article => (
          <div
            key={article.id}
            className="card"
            onClick={() => setSelectedArticle(article)}
          >
            <span className={`badge ${article.type}`}>
              {article.type.toUpperCase()}
            </span>

            <h3>{article.title}</h3>
            <div className="content">
              {article.content.slice(0, 150)}...
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <h2>{selectedArticle.title}</h2>
            <span className={`badge ${selectedArticle.type}`}>
              {selectedArticle.type.toUpperCase()}
            </span>

            <pre className="modal-content">
              {selectedArticle.content}
            </pre>

            <button
              className="close-btn"
              onClick={() => setSelectedArticle(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
