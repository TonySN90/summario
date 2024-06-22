function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1000px] px-4 m-auto">{children}</div>;
}

export default Wrapper;
