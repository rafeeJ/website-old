import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={"mb-5 flex"}>
      <Link href={"/"}>home</Link>
      <div className={"flex-grow"} />
      <div className={"gap-4 flex"}>
        <a href={"https://www.linkedin.com/in/rafeejenkins/"}>linkedin</a>
        <a href={"https://github.com/rafeeJ"}>github</a>
        <a href={"mailto:rafeejenkins@gmail.com"}>email</a>
      </div>
    </nav>
  );
};
