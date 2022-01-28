<script>
	export let sections;
	export let global;
	import Icon from '$lib/components/Icon.svelte';
</script>

<nav
	class="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-light-100
  text-gray-700
  hover:text-azure-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
>
	<div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
		<button
			class="
      navbar-toggler
      text-azure-700
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="bars"
				class="w-6"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
				/>
			</svg>
		</button>
		<div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
			<a
				class="
        flex
        items-center
        text-azure-800
        hover:text-azure-800
        focus:text-azure-800
        mt-2
        lg:mt-0
        mr-1
      "
				href="/"
			>
				<span class="md:ml-3 md:mr-10 font-mono text-xl ">{global.headerTitle}</span>
			</a>
			<!-- Left links -->
			<ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
				{#each sections as section}
					<li class="nav-item p-2">
						<a
							sveltekit:prefetch
							href="/{section.slug.current}"
							class="nav-link text-gray-700 hover:text-azure-700 focus:text-azure-700 p-0"
							>{section.title}</a
						>
					</li>
				{/each}
			</ul>
			<!-- Left links -->
		</div>
		<!-- Collapsible wrapper -->
		 <!-- Right elements -->
  <div class="flex items-center relative">

  <div class="dropdown relative">
    <a class="
          text-azure-600
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		<Icon
			kind="book"
			title="Reference"
			className="h-6 w-full object-contain object-center"
		/>
    </a>
    <ul class="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-light-200
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
      <li>
        <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/category">Categories</a>
      </li>
      <li>
        <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/technology">Technologies</a>
      </li>
      <li>
        <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/tag">Tags</a>
      </li>
    </ul>
  </div>

  </div>
  <!-- Right elements -->
	</div>
</nav>
