import Footer from "./Footer";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ marginTop: "100px" }}>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
