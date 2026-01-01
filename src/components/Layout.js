import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <>
      {/* Top Navbar */}
      <div style={styles.navbar}>
        <h3 style={{ margin: 0 }}>Creative Showcase</h3>
        <button onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>

      {/* Page Content */}
      <div style={styles.content}>{children}</div>
    </>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#111",
    color: "#fff"
  },
  logout: {
    padding: "6px 12px",
    cursor: "pointer"
  },
  content: {
    padding: "20px"
  }
};