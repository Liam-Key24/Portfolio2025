

export default function Contact() {

    return (
        <>
            <form className="h-screen w-screen flex flex-col justify-center items-center gap-16">
                <h1 className="text-4xl font-semibold text-blue-400">Contact Me</h1>
                <div className="flex flex-col gap-4 w-full h-fit justify-center items-center">
                <input type="text" placeholder="Name" className="border-2 border-blue-200 rounded-md p-2 w-2/3 " />
                <input type="email" placeholder="Email" className="border-2 border-blue-200 rounded-md p-2  w-2/3" />
                <textarea placeholder="Message" className="border-2 border-blue-200 rounded-md p-2 w-2/3 h-40"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Send</button>
                </div>
            </form>
        
        </>
    )
}