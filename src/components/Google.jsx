import { useEffect, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function () {
  let googleButton = useRef();
  const handleCredentialResponse = async (response) => {
    console.log(response.credential);
    const data = { token_id: response.credential };
    const userResponse = await axios.post(apiUrl + "/auth/google", data);
    console.log(userResponse);
    // dispatch(user_google_login())
  };

  useEffect(() => {
    window.onload = function () {
      /* global google */
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        googleButton.current,
        {
          theme: "filled_black",
          size: "medium",
          type: "standard",
          text: "signin_with",
          shape: "rectangular",
        } // customization attributes
      );
    };
  }, []);
  return <div ref={googleButton}></div>;
}
