import { Link as Anchor } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import ButtonForm from "../components/ButtonForm";

export default function SignIn() {
  const email = useRef();
  const password = useRef();

  const signin = () => {
    let data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    };
    //console.log(data)
    axios
      .post(apiUrl + "/auth/signin", data, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("token", res.data.response.token);
        localStorage.setItem("user", JSON.stringify(res.data.response.user));
        window.location.replace("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          html: err.response.data.messages
            .map((each) => `<p>${each}</p>`)
            .join(""),
        })
      );
  };

  return (
    <main className="flex w-full md:w-11/12 2xl:w-[1375px] min-h-screen items-center justify-between">
      <img
        className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover"
        src="/img/signin.png"
        alt="signin"
      />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">
          Welcome <span className="text-[#F472B6]">back</span>!
        </p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Discover manga and manwha, track your progress, have fun, read manga.
        </p>
        <form className="flex flex-col my-[25px]">
          {/* con ref={email} estoy asignando una referencia a un input */}
          <input
            ref={email}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <ButtonForm onClick={signin} value="sign in!" />
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          You dont have an account yet?{" "}
          <Anchor to="/register" className="text-[#F472B6]">
            Register
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor to="/" className="text-[#F472B6] hover:text-black">
            Home Page
          </Anchor>
          !
        </p>
      </div>
    </main>
  );
}
