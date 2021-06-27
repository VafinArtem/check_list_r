const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright copyright container">
        <p className="copyright__text">
          ©{" "}
          <a className="copyright__link" href="mailto:a.vafin85@gmail.com">
            Vafin Artem
          </a>{" "}
          2020
        </p>
        <p className="copyright__text">
          Icon made by{" "}
          <a className="copyright__link" href="https://www.flaticon.com/authors/freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a className="copyright__link" href="https://www.flaticon.com/">
            www.flaticon.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
