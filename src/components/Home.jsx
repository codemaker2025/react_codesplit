import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Navigation buttons */}
      <button>
        <Link to="/localstorage">Go to Todo List (LocalStorage)</Link>
      </button>
      <button>
        <Link to="/database">Go to Todo List (Database)</Link>
      </button>
    </div>
  );
}
