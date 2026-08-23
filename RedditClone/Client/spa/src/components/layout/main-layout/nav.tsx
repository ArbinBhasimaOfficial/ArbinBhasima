import "../../../styles/layout/main-layout/nav.css"
import Button from "../../core/button";
export default function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Button>Home</Button></li>
        <li><Button>Blog</Button></li>
        <li><Button>About</Button></li>
        <li><Button>Contact</Button></li>
        <li><Button>Start a Conversation</Button></li>
      </ul>
    </nav>
  );
}
