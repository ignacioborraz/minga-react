import NavBar from "./components/NavBar"
import Index from "./pages/Index"
import Footer from "./components/Footer"

function App() {
	let data = [
		{
			title: 'Shonen',
			character_photo: '/img/character.png',
			cover_photo: '/img/poster.png',
			description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.'
		}
	]
	return (
		<div className='flex flex-col min-h-screen items-center justify-between bg-[url("/img/home.png")] bg-center bg-cover
		md:bg-none md:bg-white'>
			<NavBar />
			<Index data={data} />
			<Footer />
		</div>
	)
}

export default App