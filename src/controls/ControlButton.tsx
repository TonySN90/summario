function ControlButton({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <div
      onClick={() => handleClick()}
      className="flex justify-center gap-2 items-center 
     bg-white w-full md:w-[100px] h-[40px] rounded-md shadow-md cursor-pointer"
    >
      {children}
    </div>
  );
}

export default ControlButton;
