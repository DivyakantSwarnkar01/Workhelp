import React from "react"

const Card = () =>{

return (
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 mt-10 relative">
    <div class="max-w-sm mx-auto bg-slate-950 shadow-lg rounded-lg overflow-hidden">
        <img class="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card Image"/>
        <div class="p-4">
            <h3 class="text-lg font-semibold">Card Title</h3>
            <p class="mt-2 text-white">This is a simple card component made with Tailwind CSS. You can customize it to fit your needs.</p>
            <div class="mt-4">
                <a href="#" class="text-teal-500 hover:text-teal-700 font-semibold">Read More</a>
            </div>
        </div>
    </div>
    <div class="max-w-sm mx-auto bg-slate-950 shadow-lg rounded-lg overflow-hidden">
        <img class="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card Image"/>
        <div class="p-4">
            <h3 class="text-lg font-semibold">Card Title</h3>
            <p class="mt-2 text-white">This is a simple card component made with Tailwind CSS. You can customize it to fit your needs.</p>
            <div class="mt-4">
                <a href="#" class="text-teal-500 hover:text-teal-700 font-semibold">Read More</a>
            </div>
        </div>
    </div>
</div>

)
}

export default Card;