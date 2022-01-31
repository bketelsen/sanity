<script>
	import SocialLinks from './SocialLinks.svelte';
	export let global;
</script>

<footer class="t body-font rounded-lg body-font">

<div class="bg-primary">
  <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:py-5 lg:px-10">
    <div class="px-6 py-6 bg-mix-500 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
      <div class="xl:w-0 xl:flex-1">
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Want updates in your Inbox?
        </h2>
        <p class="mt-3 max-w-3xl text-lg leading-6 ">
          Sign up for my newsletter to stay up to date.
        </p>
      </div>
      <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <form class="sm:flex" method="post" action="https://list.brian.dev/subscription/form">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-mix-700 focus:ring-white rounded-md" placeholder="Enter your email">
		  <input id="e30ec" hidden name="l" checked value="e30ec06b-3376-4792-8100-33d6feb07b99" />
          <button type="submit" class="ml-2 btn btn-secondary">
            Subscribe
          </button>
        </form>
        <p class="mt-3 text-sm ">
          I care about the protection of your data. Read my
          <a href="/" class=" font-medium underline">
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

	<div class=" bg-gradient-to-t from-light-200 to-azure-300 rounded-lg bg-opacity-75">
		<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
			<p class="text-mix-700 text-sm text-center sm:text-left">
				© 2022 {global.siteName} &rarr;
				<a
					href={global.author.twitter}
					class="text-mix-800 ml-1"
					target="_blank"
					rel="noopener noreferrer">@bketelsen</a
				>
			</p>
			<span
				class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-mix-700 text-sm"
				>				<SocialLinks author={global.author} />
</span
			>
		</div>
	</div>
</footer>
