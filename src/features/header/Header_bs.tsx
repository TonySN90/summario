import Logo from "../components/bootstrap/Logo_bs";
import Wrapper from "../components/bootstrap/Wrapper_bs";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="d-flex mb-2 mt-2" style={{ height: "60px" }}>
          <div className="d-flex gap-4 align-items-center w-100">
            <Logo />
          </div>
        </div>
        <div
          className="bg-color_brand_03_tr1"
          style={{
            height: "8px",
            marginBottom: "3px",
          }}
        ></div>
        <div
          className="w-100 bg-color_brand_03_tr2"
          style={{
            height: "3px",
            marginBottom: "16px",
          }}
        ></div>
      </Wrapper>
    </header>
  );
}

export default Header;
