import Container from "./Container";
import Link from "next/link";
import Search from "./Search";
import MenuOnPhone from "./MenuOnPhone";
import ListOfMovies from "./ListOfMovies";
import Image from "next/image";

const Navbar = async () => {
  const links = [
    { name: "الصفحة الرئيسية", url: "/" },
    { name: "المسلسلات", url: "/series?page=1" },
  ];

  return (
    <Container>
      <div className="z-50 hidden md:flex justify-between items-center gap-x-3 flex-row-reverse px-3">
        <Image
          src={"/logo.png"}
          width={250}
          height={250}
          alt="logo"
          className="hidden md:block w-11"
        />
        <Search />
        <ul className="flex items-center">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                className="font-medium px-3 py-3 text-sm text-purple-900 hover:bg-purple-900 hover:text-white transition-colors"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>{<ListOfMovies />}</li>
        </ul>
      </div>

      <MenuOnPhone links={links} />
    </Container>
  );
};

export default Navbar;
