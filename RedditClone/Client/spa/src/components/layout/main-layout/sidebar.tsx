import "../../../styles/layout/main-layout/sidebar.css"
import Nav from "./nav";
function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <ProjectInfo />
        <Nav />
      </aside>
    </>
  );
}

function ProjectInfo() {
  return (
    <div className="project-info">
      <img src="https://cdn.pixabay.com/photo/2022/12/12/12/58/dog-7651002_1280.jpg" alt="Project Logo" />
      <p>Project Name</p>
    </div>
  );
}


export default Sidebar;
