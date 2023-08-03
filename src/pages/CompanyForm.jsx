import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import Swal from "sweetalert2";
import headers from "../utils/headers";
import ButtonForm from "../components/ButtonForm";

export default function CompanyForm() {
  const navigate = useNavigate();
  const name = useRef();
  const logo = useRef();
  const website = useRef();
  const description = useRef();

  const create = () => {
    let data = {
      name: name.current.value?.trim(),
      logo: logo.current.value?.trim(),
      website: website.current.value?.trim(),
      description: description.current.value?.trim(),
    };
    axios
      .post(apiUrl + "/companies", data, headers())
      .then(() =>
        Swal.fire({
          icon: "success",
          text: "company registered!",
        })
      )
      .then(() => navigate("/"))
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
    <main className="flex w-full min-h-screen items-center justify-between">
      <div className="flex flex-col md:absolute md:top-0 md:right-[50%] justify-center items-center h-screen w-full md:w-[50%]">
        <p className="font-semibold text-[32px] text-center">
          Become a Company!
        </p>
        <form className="flex flex-col my-[25px]">
          <input
            ref={name}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            ref={logo}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="logo"
            id="logo"
            placeholder="Logo"
          />
          <input
            ref={website}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="website"
            id="website"
            placeholder="Website"
          />
          <input
            ref={description}
            className="placeholder-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[60px] p-2 my-[12px] text-[12px] rounded-lg border-2 border-[#1F1F1F]"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
          <ButtonForm onClick={create} value="create!" />
        </form>
      </div>
      <img
        className="hidden md:block md:absolute md:top-0 md:right-0 h-screen w-[50%] object-cover"
        src="/img/register.png"
        alt="register"
      />
    </main>
  );
}
