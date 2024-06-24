function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex md:justify-between md:items-end">{children}</div>
  );
}

export default Heading;
