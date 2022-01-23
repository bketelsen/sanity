<script>
    export let page;
    export let post;
    import SvelteSeo from "svelte-seo";
    import {coalesce} from "../seo";
import { globalStore } from '$lib/stores/global';

    const props = coalesce($globalStore,page,post)
    // global > page > post
</script>

<SvelteSeo
    {...props}
/>
