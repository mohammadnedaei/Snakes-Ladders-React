import './MainMenu.css'
import {useNavigate} from "react-router-dom";
const MainMenu = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-hero">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="text-amber-100">Ready to start game?</span>
                    <span className="block text-emerald-200">Start new game or import played game</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            onClick={() => {
                                navigate("/settings")
                            }
                            }
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            New Game
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Import Game
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainMenu