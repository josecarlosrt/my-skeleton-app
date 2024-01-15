<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.postcss';
	import { AppBar, AppShell, Drawer, getDrawerStore, initializeStores, LightSwitch } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 md:m-4 bg-surface-100-800-token rounded-container-token shadow">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="app-bar-slot-lead flex-none flex justify-between items-center">
					<a href="/" title="Return to Homepage">
						<Logo />
					</a>
				</div>
			</svelte:fragment>
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
						<rect width="100" height="20" />
						<rect y="30" width="100" height="20" />
						<rect y="60" width="100" height="20" />
					</svg>
				</button>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation/>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">
		<div class="container p-10 mx-auto">
			<h1 class="h1 font-bold	text-center">Welcome to <span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">CoCo</span> Design</h1>
			<p class="py-4 text-center">Get accessible color combinations for your web or app, ready to use and WCAG compliant.</p>
		</div>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="container mx-auto">
			<p class="py-4 text-center">Developed by <a class="anchor" href="/">Jose Rivera</a></p>
		</div>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
