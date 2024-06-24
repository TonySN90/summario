function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container" style={{ maxWidth: "800px", padding: "0 16px" }}>
      {children}
    </div>
  );
}

export default Wrapper;
