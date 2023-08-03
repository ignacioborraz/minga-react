import Welcome from "../components/Welcome";

export default function Allow() {
  return (
    <main className="flex flex-col md:pt-20 w-full min-h-screen items-center justify-between">
      <Welcome title={"BAD AUTH"} to="/" button={"go back home!"} />
    </main>
  );
}
