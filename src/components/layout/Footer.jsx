import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Made by Debby · {new Date().getFullYear()}</p>
      <div className="footer-icons">
        <span>🌸</span>
        <span>🦋</span>
        <span>🌟</span>
      </div>
    </footer>
  );
};

export default Footer;
