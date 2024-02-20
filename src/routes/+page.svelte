<script>
    import logo from '../Assets/logo.png'
    import header from '../Assets/header-img.jpg'
    import fixesImg from '../Assets/icons8-fix-100.png'
    import upgradesImg from '../Assets/icons8-upgrade-100.png'
    import safetyImg from '../Assets/icons8-safety-100.png'
    import homeWatchImg from '../Assets/HOUSE.png'

    import { onMount, onDestroy } from 'svelte';

    let scrolledDown = false;

    function handleScroll() {
        scrolledDown = window.pageYOffset > 50;
    }

    onMount(() => {
         if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        
            // Cleanup function to be returned for removing the event listener on component destroy
            return () => {
                window.removeEventListener('scroll', handleScroll);
        };
    }
});


</script>

<nav class="bg-white flex items-center justify-between py-1 px-6 shadow-xl sticky top-0 z-50">
    <div class="flex-1 flex justify-start">
        <img src={logo} alt="Logo" class="h-auto w-32 mb-4">
    </div>
    <ul class="flex-1 flex justify-center space-x-10 text-black text-lg font-body font-light">
        <li><a href="/services" class="hover:text-blue-600 transition-colors duration-150">SERVICES</a></li>
        <li><a href="/reviews" class="hover:text-blue-600 transition-colors duration-150">REVIEWS</a></li>
        <li><a href="/about" class="hover:text-blue-600 transition-colors duration-150">ABOUT</a></li>
        <li><a href="/contact" class="hover:text-blue-600 transition-colors duration-150">CONTACT</a></li>
    </ul>
    <div class="flex justify-end flex-1">
        <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            REQUEST QUOTE
        </button>
    </div>  
</nav>

<!--  Header image w/ text  -->
<div class="relative overflow-hidden" style="height: 100vh;">
    <div class="absolute inset-0 flex flex-col items-center justify-center" style="padding-bottom: 5vh;">
        <h1 class="text-white font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center px-4" style="max-height: 30vh; overflow: hidden;">YOUR HOME NEEDS</h1>
        <button type="button" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">CONTACT US</button>
    </div>
    <img src="{header}" alt="Header" class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
    <div class={`absolute bottom-0 w-full flex justify-center pb-2 transition-opacity duration-500 ${scrolledDown ? 'opacity-0' : 'opacity-100'}`} style="height: 10vh;">
        <div class="flex space-x-4">
            <svg class="animate-bounce w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <svg class="animate-bounce w-6 h-6 text-white" style="animation-delay: 0.1s;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <svg class="animate-bounce w-6 h-6 text-white" style="animation-delay: 0.2s;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>
</div>

<!--  Services section  -->

<div class="py-12 bg-white">
    <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What We Offer
            </p>
        </div>

        <div class="mt-10">
            <ul class="md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                <li class="relative">
                    <div class="block text-center bg-white rounded-lg shadow-md hover:scale-105 duration-200 p-8">
                        <img src={fixesImg} alt="Fixes" class="mx-auto h-20 w-20">
                        <h3 class="mt-2 text-xl font-medium text-gray-900">Fixes</h3>
                    </div>
                </li>
                <li class="relative">
                    <div class="block text-center bg-white rounded-lg shadow-md hover:scale-105 duration-200 p-8">
                        <img src={upgradesImg} alt="Upgrades" class="mx-auto h-20 w-20">
                        <h3 class="mt-2 text-xl font-medium text-gray-900">Upgrades</h3>
                    </div>
                </li>
                <li class="relative">
                    <div class="block text-center bg-white rounded-lg shadow-md hover:scale-105 duration-200 p-8">
                        <img src={safetyImg} alt="Safety Packages" class="mx-auto h-20 w-20">
                        <h3 class="mt-2 text-xl font-medium text-gray-900">Safety Packages</h3>
                    </div>
                </li>
                <li class="relative">
                    <div class="block text-center bg-white rounded-lg shadow-md hover:scale-105 duration-200 p-8">
                        <img src={homeWatchImg} alt="Home Watch" class="mx-auto h-20 w-20">
                        <h3 class="mt-2 text-xl font-medium text-gray-900">Home Watch</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>