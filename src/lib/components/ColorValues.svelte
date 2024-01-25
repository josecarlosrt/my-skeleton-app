<script context="module" lang="ts">
	// Declare EyeDropper as a global variable
	declare const EyeDropper: any;
</script>
  
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

	// Function To Activate Eye Dropper
	const activateEyeDropper = async (inputId: string, number: number) => {
		// Disable pointer events on the entire document temporarily
		document.documentElement.style.pointerEvents = 'none';

		const targetInput = document.getElementById(inputId) as HTMLInputElement;

		if (!targetInput) {
		alert('Input field not found.');
		return;
		}

		try {
		// Opening the eye dropper and getting the selected color
		const eyeDropper = new EyeDropper();
		const { sRGBHex } = await eyeDropper.open();

		// Paste the color into the input field
		targetInput.value = sRGBHex;

		// Save the color value to local storage
		localStorage.setItem(inputId, sRGBHex);

		// Apply the border color
		targetInput.style.borderColor = sRGBHex;

		// Use the Clipboard API to copy the color code to the clipboard
		await navigator.clipboard.writeText(sRGBHex);
		} catch (error) {
		console.error(error);
		alert('Failed to copy the color code!');
		} finally {
		// Re-enable pointer events on the document
		document.documentElement.style.pointerEvents = 'auto';
		}
	};

	onMount(() => {
		if (!$inputValue) {
		inputValue.set(selectedValue);
		}

		// Read values from local storage and set them to the input fields
		colorInputs.forEach((number) => {
		const inputId = `color#${number}`;
		const targetInput = document.getElementById(inputId) as HTMLInputElement;
		const savedColor = localStorage.getItem(inputId);

		if (targetInput && savedColor) {
			targetInput.value = savedColor;
			targetInput.style.borderColor = savedColor; // Apply the border color
		}
		});

	});

	// Clear Field
	function clearAllFields() {
		// Clear local storage
		localStorage.clear();
		console.log('Local storage cleared');

		// Additional logic to clear input fields if needed
		colorInputs.forEach((number) => {
		const inputId = `color#${number}`;
		const targetInput = document.getElementById(inputId) as HTMLInputElement;

		if (targetInput) {
			targetInput.value = '';
			targetInput.style.borderColor = ''; // Reset the border color
		}
		});
	}

	// Disable Skeleton UI animation after a short delay (adjust as needed)
	// Variable to control the Skeleton UI animation
	let animate = true;

    setTimeout(() => {
		animate = false;
    }, 1000);
  </script>
  
  

  <div class="container">
	<div>
	  <div class="w-full max-w-lg mx-auto my-4">
		<div class="flex text-center items-center justify-center w-full" class:animate-pulse={animate}>
		  <label class="label text-center">
		  <span class="mb-4">How may colors would you like to combine?</span>
		  <div class="placeholder" />
		  <select class="select w-16" bind:value={$inputValue} on:change={handleSelectChange}>
			<option value={2}>02</option>
			<option value={3}>03</option>
			<option value={4}>04</option>
			<option value={5}>05</option>
			<option value={6}>06</option>
		  </select>		  
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 p-6  gap-4 justify-center">
		  {#each colorInputs as number (number)}
			<div class="relative">
				<input type="text" class="input" value="#" id={`color#${number}`} />
				<div class="absolute inset-y-0 right-0 flex items-center pt-2 pr-2">
					<button on:click={() => activateEyeDropper(`color#${number}`, number)}>
						<span class="material-symbols-outlined">
							colorize
						</span>
					</button>
				</div>
			</div>
		  {/each}
		</div>
		<!--Card Buttons -->
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center">
			<div>
				<button type="button" class="btn variant-filled mb-2">Generate</button>
			</div>
			<div>
				<button type="button" class="btn variant-filled" on:click={clearAllFields}>Clear All</button>
			</div>
		</div>
	  </div>
	</div>
  </div>


  <style>
.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 12
	}
</style>