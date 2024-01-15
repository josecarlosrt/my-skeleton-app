import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

type InputValue = number;

const inputValue: Writable<InputValue> = localStorageStore('inputValue', 1);

export { inputValue };
