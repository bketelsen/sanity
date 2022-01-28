<script context="module">
	export const prerender=true;
	export async function load({ fetch, stuff }) {
		try {
			const res = await fetch('/about.json');
			const data = await res.json();
			const {page} = data;
			const {global} = stuff;
			return {
				props: {global, page}
			};
		} catch (err) {
			console.log('500:', err);
		}
	}
</script>

<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import SEO from '$lib/components/SEO.svelte';


	export let page;
	export let global;

</script>
<SEO {page} {global} />

<PageWrapper >
		<PageTitle {...page} />
		 <!-- Section: Design Block -->
  <section class="mb-20 text-gray-700">

    <div class="hidden xl:block">
      <img
        class="opacity-10 absolute w-48 right-0 greyscale"
        src="https://mdbootstrap.com/img/Photos/new-templates/podcaster/dots-pink-2.png"
        alt="dots"
      />
    </div>
    <div class="image-wrapper-2 hidden xl:block">
      <img
        class="opacity-10 absolute w-48 top-3/4 left-0 greyscale"
        src="https://mdbootstrap.com/img/Photos/new-templates/podcaster/dots-pink-2.png"
        alt="dots"
      />
    </div>
    <div class="image-wrapper-3 hidden xl:block">
      <img
        class="opacity-10 absolute w-48 top-full right-0 greyscale"
        src="https://mdbootstrap.com/img/Photos/new-templates/podcaster/dots-pink-2.png"
        alt="dots"
      />
    </div>
    <div class="grid grid-cols-1 justify-center">
      <div class="xl:w-8/12 lg:w-10/12 mx-auto">
        <p class="text-center uppercase text-blue-600 font-bold mb-4">Category</p>
        <h2 class="text-3xl text-center font-black mb-6 pb-2">
          Programming classes
        </h2>
        <p class="text-xl font-normal text-gray-500 mb-6">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
          nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
          at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
        <p class="text-gray-500 mb-6">
          Faucibus commodo massa rhoncus, volutpat.
          <span class="text-gray-700 font-medium">Dignissim</span> sed
          <span class="text-gray-700 font-medium">eget risus enim</span>. Mattis
          mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
          penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
          rhoncus, volutpat. Dignissim sed eget risus enim.
          <a class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out" href="#!">Mattis mauris semper</a> sed amet vitae sed
          turpis id.
        </p>
        <ul class="text-gray-500 mb-6 list-disc list-inside">
          <li class="mb-2">Quis elit egestas venenatis mattis dignissim.</li>
          <li class="mb-2">Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
          <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
        </ul>
        <p class="text-gray-500 mb-12">
          Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo
          sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis
          elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
          Amet, duis sed elit interdum dignissim.
        </p>
        <h2 class="text-2xl font-bold mb-6 pb-2">From beginner to expert in 30 days</h2>
        <p class="text-gray-500 mb-6">
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
          ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate
          nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
          cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed
          convallis diam.
        </p>
        <figure class="border-l-4 border-gray-200">
          <blockquote class="ml-2 italic font-bold">
            <p class="ml-4 py-2">
              “Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
              morbi.”
            </p>
          </blockquote>
        </figure>
        <p class="text-gray-500 my-6 pb-2">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit.
        </p>
        <figure class="mb-6 pb-4">
          <img
            class="rounded-lg shadow-lg w-full"
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/img16.jpg"
            alt="image"
          />
          <figcaption class="text-sm text-gray-500 mt-3">
            Sagittis scelerisque nulla cursus in enim consectetur quam.
          </figcaption>
        </figure>
        <h2 class="text-2xl font-bold mb-6 pb-2">Everything you need to get up and running</h2>
        <p class="text-gray-500 mb-6">
          Purus morbi dignissim senectus mattis
          <a class="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out" href="#!">adipiscing</a>. Amet, massa quam varius orci
          dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt
          sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui
          tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras
          fermentum convallis quam.
        </p>
        <p class="text-gray-500 mb-6">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit.
        </p>
      </div>
    </div>
  </section>
</PageWrapper>

