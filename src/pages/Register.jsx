import { Link as Anchor, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import ButtonForm from "../components/ButtonForm";
import Google from "../components/Google";

export default function Register() {
  const navigate = useNavigate();
  const email = useRef();
  const photo = useRef();
  const password = useRef();

  const register = () => {
    let data = {
      email: email.current.value?.trim(),
      photo: photo.current.value?.trim(),
      password: password.current.value?.trim(),
    };
    //console.log(data)
    axios
      .post(apiUrl + "/auth/register", data)
      .then(() =>
        Swal.fire({
          icon: "success",
          text: "sign in please!",
        })
      )
      .then(() => navigate("/signin"))
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
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">Welcome</p>
        <p className="font-semibold text-[12px] mb-[12px] text-center p-2">
          Discover manga and comics, track your progress, have fun, read manga.
        </p>
        <form className="flex flex-col my-[25px]">
          <input
            ref={email}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            ref={photo}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="url"
            name="photo"
            id="photo"
            placeholder="Url photo"
          />
          <input
            ref={password}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <ButtonForm onClick={register} value="register!" />
          <Google />
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          Already have an account?{" "}
          <Anchor to="/signin" className="text-[#F472B6]">
            Log in
          </Anchor>
          !
        </p>
        <p className="font-semibold text-[12px] text-center p-2">
          Go back to{" "}
          <Anchor to="/" className="text-[#F472B6] hover:text-black">
            Home
          </Anchor>
          !
        </p>
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/img/register.png"
        alt="register"
      />
    </main>
  );
}
