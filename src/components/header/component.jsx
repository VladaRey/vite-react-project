import { useState } from "react";
import { useUserContext } from "../../contexts/user";
import Modal from "../modal/component";

export default function Header() {
  const {user, login, logout} = useUserContext();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header>
      header
      {user && <span>{user.name}</span>}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Login</button>
      )}
      {isVisible && (
        <Modal onClose={() => setIsVisible(false)}>Login Form</Modal>
      )}
    </header>
  );
}
