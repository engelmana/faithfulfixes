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
    <div class="absolute inset-0 flex flex-col items-center justify-center" style="padding-bottom: 10vh;"> 
        <h1 class="text-white font-bold text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center px-4" style="max-height: 20vh; overflow: hidden;">YOUR HOME NEEDS</h1> 
        <button type="button" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">CONTACT US</button>
    </div>
    <img src="{header}" alt="Header" class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
    <div class="absolute bottom-0 w-full flex justify-center pb-2 transition-opacity duration-500" style="height: 15vh; opacity: {scrolledDown ? '0' : '1'};">
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


<!-- Reviews Section-->
<div class="py-12 bg-white">
    <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Reviews</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hear What Our Clients Have To Say
            </p>
        </div>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
              <div class="lg:col-span-4">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>
          
                <div class="mt-3 flex items-center">
                  <div>
                    <div class="flex items-center">
                      <!-- Active: "text-yellow-400", Default: "text-gray-300" -->
                      <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="sr-only">5 out of 5 stars</p>
                  </div>
                  <p class="ml-2 text-sm text-gray-900">Based on 1624 reviews</p>
                </div>
          
                <div class="mt-6">
                  <h3 class="sr-only">Review data</h3>
          
                  <dl class="space-y-3">
                    <div class="flex items-center text-sm">
                      <dt class="flex flex-1 items-center">
                        <p class="w-3 font-medium text-gray-900">5<span class="sr-only"> star reviews</span></p>
                        <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                          <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                          </svg>
          
                          <div class="relative ml-3 flex-1">
                            <div class="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                            <div style="width: calc(1019 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                          </div>
                        </div>
                      </dt>
                      <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">63%</dd>
                    </div>
                    <div class="flex items-center text-sm">
                      <dt class="flex flex-1 items-center">
                        <p class="w-3 font-medium text-gray-900">4<span class="sr-only"> star reviews</span></p>
                        <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                          <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                          </svg>
          
                          <div class="relative ml-3 flex-1">
                            <div class="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                            <div style="width: calc(162 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                          </div>
                        </div>
                      </dt>
                      <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">10%</dd>
                    </div>
                    <div class="flex items-center text-sm">
                      <dt class="flex flex-1 items-center">
                        <p class="w-3 font-medium text-gray-900">3<span class="sr-only"> star reviews</span></p>
                        <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                          <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                          </svg>
          
                          <div class="relative ml-3 flex-1">
                            <div class="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                            <div style="width: calc(97 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                          </div>
                        </div>
                      </dt>
                      <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">6%</dd>
                    </div>
                    <div class="flex items-center text-sm">
                      <dt class="flex flex-1 items-center">
                        <p class="w-3 font-medium text-gray-900">2<span class="sr-only"> star reviews</span></p>
                        <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                          <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                          </svg>
          
                          <div class="relative ml-3 flex-1">
                            <div class="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                            <div style="width: calc(199 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                          </div>
                        </div>
                      </dt>
                      <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">12%</dd>
                    </div>
                    <div class="flex items-center text-sm">
                      <dt class="flex flex-1 items-center">
                        <p class="w-3 font-medium text-gray-900">1<span class="sr-only"> star reviews</span></p>
                        <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                          <svg class="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                          </svg>
          
                          <div class="relative ml-3 flex-1">
                            <div class="h-3 rounded-full border border-gray-200 bg-gray-100"></div>
                            <div style="width: calc(147 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"></div>
                          </div>
                        </div>
                      </dt>
                      <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">9%</dd>
                    </div>
                  </dl>
                </div>
          
                <div class="mt-10">
                  <h3 class="text-lg font-medium text-gray-900">Share your thoughts</h3>
                  <p class="mt-1 text-sm text-gray-600">If you’ve worked with us, share your thoughts with other customers</p>
          
                  <a href="#" class="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">Write a review</a>
                </div>
              </div>
          
              <div class="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                <h3 class="sr-only">Recent reviews</h3>
          
                <div class="flow-root">
                  <div class="-my-12 divide-y divide-gray-200">
                    <div class="py-12">
                      <div class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="Emily Selman." class="h-12 w-12 rounded-full">
                        <div class="ml-4">
                          <h4 class="text-sm font-bold text-gray-900">Emily Selman</h4>
                          <div class="mt-1 flex items-center">
                            <!-- Active: "text-yellow-400", Default: "text-gray-300" -->
                            <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                            <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="sr-only">5 out of 5 stars</p>
                        </div>
                      </div>
          
                      <div class="mt-4 space-y-6 text-base italic text-gray-600">
                        <p>Home fixed so good.</p>
                      </div>
                    </div>
          
                    <!-- More reviews... -->
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>

