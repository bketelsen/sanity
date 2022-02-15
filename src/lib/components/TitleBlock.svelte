<script>
    export let category = "";
    export let title;
    export let description ="";
</script>

<section class="text-gray-400 body-font bg-gray-900">
    <div class="container px-5 pt-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-blue-400 tracking-widest font-medium title-font mb-1 uppercase">{category}</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{title}</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-italic">{description}</p>
      </div>
    </div>
  </section>
