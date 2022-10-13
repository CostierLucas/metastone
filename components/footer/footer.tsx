const Footer = () => {
  return (
    <footer>
      {/* network */}
      <div className="categorie">
        <h4>Network</h4>
        <ul>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </div>

      <div className="categorie">
        <h4>Something</h4>
        <ul>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </div>
      <div className="line" />
      <div className="underline">
        <p>© 2022 METASTONE</p>
        <div className="social">
          <a href="#twitter">twitter</a>
          <a href="#discord">discord</a>
          <a href="#discord">mail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
