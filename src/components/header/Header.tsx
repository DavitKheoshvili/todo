import mobileBg from './../../images/bg-mobile-light.jpg';
import Title from "./../title/Title";

function Header() {
  return (
    <div className="bg-cover bg-center h-52 px-7 pt-12" style={{backgroundImage: `url(${mobileBg})`}}>
      <Title />
    </div>
  );
}


export default Header;
