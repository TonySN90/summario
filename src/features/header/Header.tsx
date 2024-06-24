import Logo from "../components/Logo";
import Wrapper from "../components/Wrapper";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="h-[70px] sm:h-[80px] flex items-center mb-[3px] border-b-1 border-b-color_brand_03">
          <div className="flex gap-4 items-center w-full">
            <Logo />
          </div>
        </div>
        <div className="w-full h-2 bg-color_brand_03_tr1 mb-[3px]"></div>
        <div className="w-full h-1 bg-color_brand_03_tr2 mb-4"></div>
      </Wrapper>
    </header>
  );
}

export default Header;
