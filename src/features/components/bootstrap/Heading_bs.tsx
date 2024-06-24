function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-sm-flex justify-content-between align-items-end">
      {children}
    </div>
  );
}

export default Heading;
