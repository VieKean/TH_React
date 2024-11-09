// Item Component
function Item(props) {
  return (
    <li>
      <a href={props.link}>{props.content}</a>
    </li>
  );
}

// Menu Component
function Menu({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <Item key={index} link={item.url} content={item.text} />
      ))}
    </ul>
  );
}

// Header Component
function Header() {
  const list = [
    { url: '/home', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' }
  ];

  return (
    <header>
      <Menu list={list} />
    </header>
  );
}

export default Header;
