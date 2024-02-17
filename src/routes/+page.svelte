<script>
    import logo from '../Assets/logo.png'
</script>

<nav class="bg-white flex items-center justify-between py-1 px-6 shadow-md">
    <div class="flex-1 flex justify-start">
        <img src={logo} alt="..." class="h-auto w-32 mb-4">
    </div>
    <ul class="flex-1 flex justify-center space-x-10 text-black text-lg font-body">
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
    <div class="flex-1"></div>
</nav>