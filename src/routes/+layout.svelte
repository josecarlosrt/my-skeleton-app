<script lang="ts">
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
						<svg class="lg:!ml-0 w-[35px] lg:w-[70px] overflow-hidden fill-token" version="1.1" id="Layer_2_00000000902919752282003780000002383429973894981778_"
						xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.9 338.9"
								style="enable-background:new 0 0 511.9 338.9;" xml:space="preserve">
							<g id="Layer_1-2_00000086682403966620132650000017256120043432394428_">
								<g id="Layer_1-2">
									<path d="M262,202.1c-14.5-11.6-27.5-22-41.5-33.2c4.3-9.5,8.5-18.8,12.7-28.1c16.5-36.1,33-72.2,49.5-108.3
										c8.7-19,15.9-24.2,28.3-20.3c14.1,4.4,23.2,22.8,19.4,38.9c-0.4,1.7-1.1,3.5-1.8,5.1C306.7,104.1,284.8,152.1,262,202.1L262,202.1
										z"/>
									<path d="M136.7,308.2c18.5-8.1,23.4-20.3,24-36.2c0.8-22.5,8.3-41.3,31.8-50.2c3.7-1.4,6.4-6.9,8.6-11c4.2-7.9,7.7-16.2,12.1-25.7
										c12.6,10.1,24.8,19.3,36.1,29.4c2.2,2,3.1,8.4,1.7,11.2c-8,15-10.1,30-9,47.4c2.4,34.6-36,63-69.6,52.8
										C160.6,322.3,150.1,315,136.7,308.2L136.7,308.2z M169,306.9c24.2,11.1,60.1-13.2,59.2-40.3c-0.4-12.5-9.3-26.6-19.6-28.3
										c-12.3-2-20.5,6.1-26.2,15.6c-3.9,6.4-6,14.1-7.8,21.4C172.2,285.3,171,295.6,169,306.9L169,306.9z"/>
									<path d="M466.3,177.7c-13.4-14.8-26-28.9-38.7-42.8c-10-11-20.9-21.3-29.7-33.2c-2.9-3.9-3.1-13.2-0.4-17.4
										c4.8-7.2,11.8-3.7,17,1.8c24.5,26.5,49,52.9,73.4,79.5c7.1,7.7,8.1,15,0.1,23.5c-23.6,25.4-46.7,51.3-70,77
										c-6.1,6.7-13.5,13.1-21.6,4.8c-7.3-7.4-1.8-14.6,4.1-21C422.4,226.2,444.1,202.1,466.3,177.7L466.3,177.7L466.3,177.7z"/>
									<path d="M41.6,177.7c22.7,25.1,44.5,49.1,66.2,73c5.9,6.4,11.1,14,2.8,20.8c-7.7,6.2-15,1.3-21-5.4c-23.4-26.1-47-52.1-70.7-78
										c-6.7-7.4-6.4-14.3,0.2-21.4c24.5-26.4,49-52.8,73.4-79.2c5.3-5.7,11.1-10.5,18.2-3.4c7,6.9,4.1,13.3-2,19.8
										C86.4,128,64.5,152.5,41.6,177.7L41.6,177.7z"/>
								</g>
							</g>
						</svg>
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
