<script>
    export let subtitle;
    export let title;
    export let herotext;
</script>
<div class="flex flex-col text-center w-full mb-5 lg:mb-20">
    <h2 class="text-xs text-blue-400 tracking-widest font-medium title-font mb-1 uppercase">
        {subtitle}
    </h2>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        {title}
    </h1>
    <p class="lg:w-1/3 mx-auto leading-relaxed text-xl">
        {herotext}
    </p>
</div>
