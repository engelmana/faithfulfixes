<script>
    import logo from '../Assets/logo.png'
    import header from '../Assets/header-img.jpg'
    import fixesImg from '../Assets/icons8-fix-100.png'
    import upgradesImg from '../Assets/icons8-upgrade-100.png'
    import safetyImg from '../Assets/icons8-safety-100.png'
    import homeWatchImg from '../Assets/HOUSE.png'
</script>

<nav class="bg-white flex items-center justify-between py-1 px-6 shadow-xl sticky top-0 z-50">
    <div class="flex-1 flex justify-start">
        <img src={logo} alt="..." class="h-auto w-32 mb-4">
    </div>
    <ul class="flex-1 flex justify-center space-x-10 text-black text-lg font-body font-light">
        <li>
            <a href="/services" class="hover:text-blue-600 transition-colors duration-150">SERVICES</a>
        </li>
        <li>
            <a href="/reviews" class="hover:text-blue-600 transition-colors duration-150">REVIEWS</a>
        </li>
        <li>
            <a href="/about" class="hover:text-blue-600 transition-colors duration-150">ABOUT</a>
        </li>
        <li>
            <a href="/contact" class="hover:text-blue-600 transition-colors duration-150">CONTACT</a>
        </li>
    </ul>
    <div class="flex justify-end flex-1 -translate-y-20">
        <button type="button" class="bg-btn border border-btn hover:bg-white rounded-md hover:text-btn duration-200 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 font-body text-white px-4 py-2">REQUEST QUOTE</button>
    </div>  
</nav>

<!--  Header image w/ text  -->

<div class="relative w-header h-header">
    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-header text-white text-5xl">YOUR HOME NEEDS</h1>
    <button type="button" class="bg-btn border border-btn hover:bg-white rounded-md hover:text-btn duration-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 font-body text-white px-4 py-2">CONTACT US</button>
    <img src={header} alt="..." class="w-full h-full object-cover">
</div>

<!--  Services section  -->

<div class="relative w-header h-header">

    <div class="flex justify-center flex-1 text-2xl py-3">
        <h1 class="font-body font-semibold">SERVICES</h1>
    </div>
    <div class="grid grid-cols-4 gap-4 h-72 p-4 text-black font-body text-2xl">
        <div class="bg-white rounded-md flex flex-col justify-center items-center hover:scale-105 duration-200 p-4">
            <img src={fixesImg} alt="..." class="object-contain h-32 w-full py-5">
            <div class="p-4 text-center">
                <span>FIXES</span>
            </div>
        </div>
        <div class="bg-white rounded-md flex flex-col justify-center items-center hover:scale-105 duration-200 p-4">
            <img src={upgradesImg} alt="..." class="object-contain h-32 w-full">
            <div class="p-4 text-center">
                <span>UPGRADES</span>
            </div>
        </div>
        <div class="bg-white rounded-md flex flex-col justify-center items-center hover:scale-105 duration-200 p-4">
            <img src={safetyImg} alt="..." class="object-contain h-24 w-full">
            <div class="p-5 text-center">
                <span>SAFETY PACKAGES</span>
            </div>
        </div>
        <div class="bg-white rounded-md flex flex-col justify-center items-center hover:scale-105 duration-200 p-4">
            <img src={homeWatchImg} alt="..." class="object-contain h-32 w-full">
            <div class="p-4 text-center">
                <span>HOME WATCH</span>
            </div>
        </div>
    </div>
</div>