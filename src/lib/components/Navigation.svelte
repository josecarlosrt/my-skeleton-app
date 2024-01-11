<script lang="ts">
	import { getDrawerStore } from "@skeletonlabs/skeleton";
    const drawerStore = getDrawerStore();


    function drawerClose(): void {
        drawerStore.close();
    }
</script>

<nav class="list-nav p-4">
    <ul>
        <li><a href="/" on:click={drawerClose}>Create</a></li>
        <li><a href="/" on:click={drawerClose}>Saved Palettes</a></li>
        <li><a href="/" on:click={drawerClose}>More Tools</a></li>
    </ul>
</nav>