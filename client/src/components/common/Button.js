const Button = ({ children, onClick, href, className }) => {
  const bg = "bg-[#CAC9C9] from-[#6C65B133] to-[#8AF5ED27] bg-gradient-to-r";
  return (
    <>
      {href ? (
        <a href={href}>
          <button className={`p-4 rounded-lg ${bg} ${className}`}>
            {children}
          </button>
        </a>
      ) : (
        <button className={`p-4 rounded-lg ${bg} ${className}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
