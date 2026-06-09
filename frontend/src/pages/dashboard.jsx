import { useEffect, useState } from "react"


export default function Dashboard() {

    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")

    const handlePrompt = (e) => {

        setPrompt(e.target.value)

        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

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

                <div className="text-center text-red-400 py-8">
                    <h1 className="font-serif text-lg font-bold">Welcome User</h1>
                </div>

                <div className="flex-1 relative">

                    <div className="flex">
                            <p>kjhfsdfsdff</p>
                    </div>

                    <div className="flex justify-center absolute bottom-5 left-0 w-full">
                        <div className="flex gap-8 items-end bg-gray-100 px-4 py-3 rounded-xl shadow-xl w-8/12">
                            <form onSubmit={handleSubmit} className="flex w-full">

                                <textarea
                                    placeholder="What's on your mind?"
                                    value={prompt}
                                    onChange={handlePrompt}
                                    rows={1}
                                    className="w-full resize-none bg-transparent outline-none"
                                />

                                <button className="bg-blue-500 text-white py-1 px-3 rounded
                            hover:bg-blue-600 duration-100 h-fit self-end" type="submit">Send</button>
                            </form>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}