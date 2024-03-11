import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerc">
      <section>
        <ul>
          <li>
            <a href="https://www.riotgames.com/pt-br" target="_blank">
              <img className="images riot" src="/images/riot.png" alt="riot logo"></img>
            </a>
          </li>
          <li>
            <a href="https://www.leagueoflegends.com/pt-br/" target="_blank">
              <img className="images" src="/images/lol-logo.png" alt="lol logo"></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img className="images" src="/images/league-of-legends-logo.webp" alt="logo league of legends"></img>
      </section>
      <section>
       <a href="https://github.com/AnaJuliaSSdev">
        <img className="images" src="/images/github.png"></img>
       </a>
        </section>
    </footer>
  );
};

export default Footer;
