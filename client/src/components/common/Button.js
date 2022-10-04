const Button = ({ children, onClick, className }) => {
  const bg = "bg-[#CAC9C9] from-[#6C65B133] to-[#8AF5ED27] bg-gradient-to-r";
  return (
    <>
      <button className={`p-4 rounded-lg ${bg} ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
