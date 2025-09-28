import "./Topbar.css";

const Topbar = ({ title, user }) => {
  return (
    <div className="topbar">
      <h1>{title}</h1>
      <div className="user-info">
        <span>{user?.email}</span>
      </div>
    </div>
  );
};

export default Topbar;
