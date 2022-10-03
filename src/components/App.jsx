import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//card for mapping
function createEntry(emojiCard) {
  return (
    <Entry
      key={emojiCard.id}
      emoji={emojiCard.emoji}
      name={emojiCard.name}
      description={emojiCard.meaning}
    />
  );
}
//display
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <h2>
        <div>here's all you need to know about Emojis that we use daily.
          keep scrolling 👇🏻
        </div>
      </h2>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
