<script>
    export let page;
    export let post;
    export let global;
    import SvelteSeo from "svelte-seo";
    import {coalesce} from "../seo";

    const props = coalesce(global,page,post)
    // global > page > post
    console.log(props)
</script>

<SvelteSeo
    {...props}
/>
