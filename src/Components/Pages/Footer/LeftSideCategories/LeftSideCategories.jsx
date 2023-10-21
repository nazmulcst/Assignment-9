import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LeftSideCategories = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    fetch("footer.json")
      .then((res) => res.json())
      .then((data) =>setFooter(data));
  }, []);

  return (
    <div className=" underline grid">
      {footer.map((footer) => (
        <Link
          to={`/footer/${footer.id}`}
          className=" my-1 lg:ml-10"
          key={footer.id}
        >
          {footer.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideCategories;

