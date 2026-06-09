import { useState } from "react"


export default function Dashboard() {

    const [prompt, setPrompt] = useState("")

    const handlePrompt = (e) => {

        setPrompt(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!prompt || prompt.trim() === "") {
            console.log("prompt is empty");
            alert("Prompt is empty!");
            return;
        }

        console.log("prompt sent!");
    };

    return (
        <div>
            <div className="h-screen flex flex-col">

                {/* Header */}
                <div className="text-center text-red-400 py-8">
                    <h1 className="font-serif text-lg font-bold">Welcome User</h1>
                </div>

                <div className="flex-1 relative">

                    <div className="flex justify-center absolute bottom-5 left-0 w-full">
                        <div className="flex gap-5 items-center bg-gray-100 px-4 py-3 rounded-xl shadow-xl">
                            <form onSubmit={handleSubmit}>
                                <input placeholder="What's on your mind?" type="text"
                                    value={prompt} onChange={handlePrompt} />
                                <button className="bg-blue-500 text-white py-1 px-3 rounded
                            hover:bg-blue-600 duration-100" type="submit">send</button>
                            </form>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}