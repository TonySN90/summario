import Logo from "../components/Logo";

function Header() {
  return (
    <header>
      <div className="h-[80px] flex items-center justify-center bg-color_brand_03 mb-[3px]">
        <div className="flex gap-4 items-center">
          <Logo />
        </div>
      </div>
      <div className="w-full h-2 bg-color_brand_03_tr1 mb-[3px]"></div>
      <div className="w-full h-1 bg-color_brand_03_tr2 mb-4"></div>
    </header>
  );
}

export default Header;
