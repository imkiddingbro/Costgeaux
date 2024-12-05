function Header() {
  return (
    <header>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Costgeaux Grocery Store Inventory
      </h1>
      <h2
        style={{
          marginTop: "40px",
          display: "inline-block",
          float: "left",
        }}
      >
        Products
      </h2>
      <h2
        style={{
          marginTop: "40px",
          display: "inline-block",
          float: "right",
          paddingRight: "100px",
        }}
      >
        Orders
      </h2>
    </header>
  );
}

export default Header;
