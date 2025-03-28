const Home = () => {
        return (
            <>
            <h1 class="mt-10 text-center text-4xl/9 font-bold tracking-tight text-gray-900">Bienvenu dans notre Recipe App</h1>
            <div className="flex justify-center flex-wrap p-7 m-7" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">TITRE DE LA RECETTE</h2>
                      <p className="text-gray-600 mb-2">Description</p>
                      <p className="text-gray-600 mb-2">Cree par :</p>
                      <p className="text-gray-800 font-medium mb-2"></p>
                    </div>
                </div>
              </div>
            </>
          )
}

export default Home