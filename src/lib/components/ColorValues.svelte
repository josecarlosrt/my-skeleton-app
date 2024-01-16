<script lang="ts">
	import { inputValue } from '$lib/stores';
	import { onMount } from 'svelte';
  
	let selectedValue: number = $inputValue || 2;
	let colorInputs = Array.from({ length: selectedValue }, (_, index) => index + 1);
  
	function handleSelectChange(event: Event) {
    const target = event.currentTarget as HTMLSelectElement;
    selectedValue = parseInt(target.value, 10);
    inputValue.set(selectedValue);
    colorInputs = Array.from({ length: selectedValue }, (_, index) => index + 1);
  }
  
	onMount(() => {
	  if (!$inputValue) {
		inputValue.set(selectedValue);
	  }
	});
  
	// Clear Field
	function clearAllFields() {
		console.log("Clear")
	}
  </script>
  
  <div class="container">
	<div>
	  <div class="w-full max-w-lg mx-auto my-4">
		<div class="flex text-center items-center justify-center w-full">
		  <label class="label text-center">
		  <span class="mb-4">How may colors would you like to combine?</span>
		  <select class="select w-16" bind:value={$inputValue} on:change={handleSelectChange}>
			<option value="2">02</option>
			<option value="3">03</option>
			<option value="4">04</option>
			<option value="5">05</option>
			<option value="6">06</option>
		  </select>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 p-6  gap-4 justify-center">
		  {#each colorInputs as number (number)}
			<div>
			  <input type="text" class="input" id={`color#${number}`} />
			</div>
		  {/each}
		</div>
		<!--Card Buttons -->
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center">
			<div>
				<button type="button" class="btn variant-filled">Generate</button>
			</div>
			<div>
				<button type="button" class="btn variant-filled" on:click={clearAllFields}>Clear All</button>
			</div>
		</div>
	  </div>
	</div>
  </div>
