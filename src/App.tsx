import './App.css'

function App() {

    return (
        <div className="pt-5 pb-5 pl-52 pr-52 flex flex-col justify-center items-center preview text-start">
            <div className="navbar bg-base-200 flex justify-center items-center rounded-box">
                <a href="#" className="btn btn-ghost text-3xl font-bold">Link Opener</a>
            </div>
            <div className="flex-col justify-start items-start w-4/6">
                <h1 className="text-2xl font-bold mt-3">
                    Open URL list
                </h1>
                <p className="mt-1">The service will help you open a list of links (URLs) in a new window. For
                    convenience you can split
                    links into blocks of 5, 10, 20, 30, 50. This will help to reduce the load on your PC.</p>
                <div role="alert" className="alert alert-warning mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    <span>Please note, if you are using the service for the first time, your browser may block pop-ups, use
                        the instructions - <a className="link">FAQ opening windows</a>.</span>
                </div>
            </div>
            <textarea className="textarea textarea-bordered mt-3 resize-none w-2/3 min-h-52"
                      placeholder="URLs..."></textarea>
            <div className="flex flex-row items-center font-bold justify-start w-4/6 mt-2">
                Split by:
                <div className="flex flex-row justify-center items-center border-2 rounded-box p-1 ml-3">
                    <input type="radio" name="radio-1" className="radio radio-sm" checked/>
                    <span className="ml-1">5</span>
                </div>
                <div className="flex flex-row justify-center items-center border-2 rounded-box p-1 ml-3">
                    <input type="radio" name="radio-1" className="radio radio-sm" checked/>
                    <span className="ml-1">10</span>
                </div>
                <div className="flex flex-row justify-center items-center border-2 rounded-box p-1 ml-3">
                    <input type="radio" name="radio-1" className="radio radio-sm" checked/>
                    <span className="ml-1">20</span>
                </div>
            </div>
            <button className="btn mt-3 w-4/6 font-bold">Split</button>
        </div>
    )
}

export default App
