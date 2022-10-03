import Button from "./Button";

const Links = () => {
  const links = [
    {
      id: 1,
      name: "Yashvardhan",
      url: "/yashvardhan",
    },
    {
      id: 2,
      name: "Yash",
      url: "/yash",
    },
    {
      id: 3,
      name: "Yashu",
      url: "/yashu",
    },
    {
      id: 4,
      name: "Yashu Bhai",
      url: "/yashubhai",
    },
    {
      id: 5,
      name: "Yashu Bhaiya",
      url: "/yashubhaiya",
    },
    {
      id: 6,
      name: "Yashu Bhaiyya",
      url: "/yashubhaiyya",
    },
    {
      id: 7,
      name: "Yashu Bhaiyya Ji",
      url: "/yashubhaiyyaji",
    },
    {
      id: 8,
      name: "Yashu Bhaiyya Ji",
      url: "/yashubhaiyyaji",
    },
    {
      id: 9,
      name: "Yashu Bhaiyya Ji",
      url: "/yashubhaiyyaji",
    },
  ];

  return (
    <>
      <div className="mt-4 grid grid-cols-4 gap-8">
        {links.map((link) => {
          return <Button key={link.id}>{link.name}</Button>;
        })}
      </div>
    </>
  );
};

export default Links;
