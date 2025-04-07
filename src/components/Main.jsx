import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function Main(){
    return (
        <div>
            <main className="relative w-full h-screen bg-black flex-box justify-end items-start overflow-y-scroll scrollbar-body">
                <Sidebar/>
                <section className="min-w-[80%] max-w-[75%] h-[200vh] bg-black flex-box flex-col justify-start gap-5">
                    <section className='w-full h-1/4 bg-gradient-to-t from-black to-primary'>
                        <div className='w-2/4 h-1/4 flex-box gap-5 p-5'>
                            <h3 className='w-1/6 h-3/4 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]'>All</h3>
                            <h3 className='w-1/6 h-3/4 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]'>Musics</h3>
                            <h3 className='w-1/6 h-3/4 rounded-full bg-[#ffffff42] text-white flex-box p-1 cursor-pointer hover:bg-[#ffffff60]'>Podcasts</h3>
                        </div>
                        <div className='w-full h-[50%] grid grid-rows-2 grid-cols-3 gap-5 gap-y-5 place-items-center p-5'>
                            <div className="most-listened row-start-1">1</div>
                            <div className="most-listened row-start-1">2</div>
                            <div className="most-listened row-start-1">3</div>
                            <div className="most-listened row-start-2">4</div>
                            <div className="most-listened row-start-2">5</div>
                            <div className="most-listened row-start-2">6</div>
                        </div>
                    </section>

                    <section className='w-full h-3/4'>
                        <div className='slider'>
                            <h2 className='text-2xl text-white'>Feitos para (usuario)</h2>
                        </div>
                    </section>

                <Footer/>
                </section>
            </main>
        </div>
    )
}

export default Main