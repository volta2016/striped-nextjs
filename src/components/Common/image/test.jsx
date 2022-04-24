const MyComponent = ({ name, isPro, stars }) => (
  <div className="hello">
    {" "}
    <div>
      {" "}
      Hello {name} {isPro ? "?" : null}{" "}
    </div>{" "}
    {stars ? <div> Stars:{"⭐️".repeat(stars)} </div> : null}{" "}
  </div>
);
