import Header from "../header/component";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
