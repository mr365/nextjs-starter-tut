import Link from "next/link";

const LinkStyle = {
  marginRight : 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={LinkStyle}>HOME</a>
    </Link>
    <Link href="/about">
      <a style={LinkStyle}>About</a>
    </Link>
    <Link href="/quotes">
      <a style={LinkStyle}>Quotes</a>
    </Link>
  </div>
);

export default Header;
