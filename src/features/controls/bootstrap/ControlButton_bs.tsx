function ControlButton({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className="btn d-flex justify-content-center gap-2 align-items-center w-100 md:w-[100px] h-[40px] bg-light"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.312)",
      }}
    >
      {children}
    </button>
  );
}

export default ControlButton;
