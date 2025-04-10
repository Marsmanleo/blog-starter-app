type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 py-8">
      <div className="neo-brutalism-white p-8">{children}</div>
    </div>
  );
};

export default Container;
