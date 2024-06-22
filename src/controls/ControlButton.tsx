function ControlButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex justify-center gap-2 items-center 
     bg-white w-full h-[40px] rounded-md shadow-md"
    >
      {children}
    </div>
  );
}

export default ControlButton;
