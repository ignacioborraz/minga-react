function App() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between bg-[url("/img/home.png")] bg-center bg-cover
		md:bg-none md:bg-white'>
			<nav className='flex w-full justify-between items-center px-5 h-20 absolute z-50
			md:w-11/12
			xl:w-[1200px]'>
				<svg className="h-14 mt-2 text-[#F472B6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
				<img  className='h-14 mt-2' src="/img/logo.png"/>
			</nav>
			<main className='flex flex-col flex-grow min-h-screen w-full justify-evenly items-center pt-20 px-5 
			md:w-11/12
			xl:w-[1200px]'>
				<div className='flex items-center justify-evenly bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] rounded-lg mt-5 hidden px-5
				md:flex md:h-56'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white">
						<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<img className='h-64 self-end ' src="/img/character.png"/>
					<img className='h-56 mb-12 sel-end' src="/img/poster.png"/>
					<div className='text-l p-5 px-10 text-white
					sm:w-10/12
					xl:w-6/12'>
						<h3 className='text-2xl'>Shonen </h3>
						<p className='text-xs
						xl:text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div className='flex flex-col justify-center items-center flex-grow mt-5 mb-10 text-white w-full h-96 rounded-lg px-5 mx-auto bg-none 
				md:items-start md:bg-[url("/img/home.png")] md:bg-center md:bg-cover'>
					<h2 className='font-bold text-5xl mb-1 text-center
					md:text-left
					xl:text-6xl'>Live the emotion of the manga</h2>
					<p className='text-2xl mb-1'>Find the perfect manga for you</p>
					<p className='text-2xl hidden font-bold mb-2
					md:flex'>#MingaForever 🔥</p>
					<button className="border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-40 p-2 justify-center text-xl rounded-lg">Sign In!</button>
				</div>
			</main>
			<footer className='flex flex-col w-full justify-between items-center pb-5 bg-white'>
				<img className='object-cover hidden w-full h-60 rounded-[0px_0px_50%_50%]
				md:flex' src="/img/footer.png"/>
				<div className='flex flex-col items-center px-5 w-full
				md:w-11/12 md:flex-row md:justify-between '>
					<div className='flex justify-evenly items-center mt-2'>
						<a className='mr-10 text-xl' href="">Home</a>
						<a className='text-xl' href="">Mangas</a>
					</div>
					<img className='my-4 w-20' src="/img/logo.png"/>
					<div className='flex flex-col items-center mt-2'>
						<div className='flex w-full justify-evenly'>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
						</div>
						<button className="border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-full p-2 justify-center text-xl text-white mt-2 rounded-lg">Donate ❤️</button>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App