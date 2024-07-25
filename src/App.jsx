import { useState } from "react";
import List from "./List";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  const [clearAll, setClearAll] = useState(false);

  const handleClearAll = () => {
    setPeople([]);
    setClearAll(true);
  };
  const handleRefresh = () => {
    setPeople(data);
    setClearAll(false);
  };

  return (
    <main>
      <section className="container">
        {!clearAll ? (
          <div>
            <h2 style={{ marginBottom: "1rem" }}>
              {people.length} Birthdays today
            </h2>
            <List people={people} />
            <button
              type="button"
              className="btn btn-block"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-block"
            onClick={handleRefresh}
          >
            Refresh All
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
