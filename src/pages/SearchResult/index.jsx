const SearchResult = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "blue", height: 1000, position: "relative" }}
      >
        <div
          style={{
            backgroundColor: "green",
            height: 300,
            width: "50%",
            position: "absolute",
            left: "25%",
            bottom: -150,
          }}
        ></div>
      </div>
      <div style={{ backgroundColor: "red", height: 1000 }}></div>
    </div>
  );
};

export default SearchResult;
