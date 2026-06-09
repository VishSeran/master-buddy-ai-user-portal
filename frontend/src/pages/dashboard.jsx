import { useEffect, useState } from "react"
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";



export default function Dashboard() {

    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])

    const handlePrompt = (e) => {

        setPrompt(e.target.value)

        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!prompt || prompt.trim() === "") {
            console.log("prompt is empty");
            alert("Prompt is empty!");
            return;
        }
        console.log("prompt sent!");

        const userMessage = {
            role: "User",
            text: prompt,
        };

        setMessages((prev) => [...prev, userMessage]);

        const res = await fetch("http://127.0.0.1:8000/chat", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: prompt })
        })

        const data = await res.json()

        const aiMessage = {
            role: "Master Buddy",
            text: data.response
        }

        setMessages((prev) => [...prev, aiMessage]);
        console.log(data)
        setPrompt("")
    };

    return (
        <div className="bg-gray-800 ">
            <div className="h-screen flex flex-col">



                <div className="flex flex-col overflow-y-auto gap-3 p-4 bottom-50">

                    <div className="text-center text-lime-500 py-5">
                        <h1 className="font-serif text-4xl font-bold">Welcome Back!</h1>
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg max-w-[70%] ${msg.role == "User"
                            ? "bg-blue-700 text-white self-end"
                            : "bg-gray-200 text-black self-start"
                            }`}>
                            <div className="flex-col">
                                <div className="font-bold">
                                    {msg.role + ":"}
                                </div>

                                <Markdown>
                                    {msg.text}
                                </Markdown>
                            </div>


                        </div>
                    ))}
                </div>

                <div className="flex-1 relative py-10">

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