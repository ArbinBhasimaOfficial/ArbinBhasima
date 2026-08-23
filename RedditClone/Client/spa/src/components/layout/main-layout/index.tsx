import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
import "../../../styles/main-layout.css"

export default function MainLayout(props: {
  children: React.ReactNode
}) {
  return (
      <main className="main-layout">
        <Header />
        <Sidebar />
        <Footer />
        <div className="main-content">
          {props.children}
        </div>
      </main>
  );
}
