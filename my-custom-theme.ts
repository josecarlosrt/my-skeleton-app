
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": 'Jost',
    	"--theme-font-family-heading": 'Jost',
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "15px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fe4bd9 
		"--color-primary-50": "255 228 249", // #ffe4f9
		"--color-primary-100": "255 219 247", // #ffdbf7
		"--color-primary-200": "255 210 246", // #ffd2f6
		"--color-primary-300": "255 183 240", // #ffb7f0
		"--color-primary-400": "254 129 228", // #fe81e4
		"--color-primary-500": "254 75 217", // #fe4bd9
		"--color-primary-600": "229 68 195", // #e544c3
		"--color-primary-700": "191 56 163", // #bf38a3
		"--color-primary-800": "152 45 130", // #982d82
		"--color-primary-900": "124 37 106", // #7c256a
		// secondary | #dcb653 
		"--color-secondary-50": "250 244 229", // #faf4e5
		"--color-secondary-100": "248 240 221", // #f8f0dd
		"--color-secondary-200": "246 237 212", // #f6edd4
		"--color-secondary-300": "241 226 186", // #f1e2ba
		"--color-secondary-400": "231 204 135", // #e7cc87
		"--color-secondary-500": "220 182 83", // #dcb653
		"--color-secondary-600": "198 164 75", // #c6a44b
		"--color-secondary-700": "165 137 62", // #a5893e
		"--color-secondary-800": "132 109 50", // #846d32
		"--color-secondary-900": "108 89 41", // #6c5929
		// tertiary | #346579 
		"--color-tertiary-50": "225 232 235", // #e1e8eb
		"--color-tertiary-100": "214 224 228", // #d6e0e4
		"--color-tertiary-200": "204 217 222", // #ccd9de
		"--color-tertiary-300": "174 193 201", // #aec1c9
		"--color-tertiary-400": "113 147 161", // #7193a1
		"--color-tertiary-500": "52 101 121", // #346579
		"--color-tertiary-600": "47 91 109", // #2f5b6d
		"--color-tertiary-700": "39 76 91", // #274c5b
		"--color-tertiary-800": "31 61 73", // #1f3d49
		"--color-tertiary-900": "25 49 59", // #19313b
		// success | #03c0d7 
		"--color-success-50": "217 246 249", // #d9f6f9
		"--color-success-100": "205 242 247", // #cdf2f7
		"--color-success-200": "192 239 245", // #c0eff5
		"--color-success-300": "154 230 239", // #9ae6ef
		"--color-success-400": "79 211 227", // #4fd3e3
		"--color-success-500": "3 192 215", // #03c0d7
		"--color-success-600": "3 173 194", // #03adc2
		"--color-success-700": "2 144 161", // #0290a1
		"--color-success-800": "2 115 129", // #027381
		"--color-success-900": "1 94 105", // #015e69
		// warning | #7972ce 
		"--color-warning-50": "235 234 248", // #ebeaf8
		"--color-warning-100": "228 227 245", // #e4e3f5
		"--color-warning-200": "222 220 243", // #dedcf3
		"--color-warning-300": "201 199 235", // #c9c7eb
		"--color-warning-400": "161 156 221", // #a19cdd
		"--color-warning-500": "121 114 206", // #7972ce
		"--color-warning-600": "109 103 185", // #6d67b9
		"--color-warning-700": "91 86 155", // #5b569b
		"--color-warning-800": "73 68 124", // #49447c
		"--color-warning-900": "59 56 101", // #3b3865
		// error | #611e4b 
		"--color-error-50": "231 221 228", // #e7dde4
		"--color-error-100": "223 210 219", // #dfd2db
		"--color-error-200": "216 199 210", // #d8c7d2
		"--color-error-300": "192 165 183", // #c0a5b7
		"--color-error-400": "144 98 129", // #906281
		"--color-error-500": "97 30 75", // #611e4b
		"--color-error-600": "87 27 68", // #571b44
		"--color-error-700": "73 23 56", // #491738
		"--color-error-800": "58 18 45", // #3a122d
		"--color-error-900": "48 15 37", // #300f25
		// surface | #403a36 
		"--color-surface-50": "226 225 225", // #e2e1e1
		"--color-surface-100": "217 216 215", // #d9d8d7
		"--color-surface-200": "207 206 205", // #cfcecd
		"--color-surface-300": "179 176 175", // #b3b0af
		"--color-surface-400": "121 117 114", // #797572
		"--color-surface-500": "64 58 54", // #403a36
		"--color-surface-600": "58 52 49", // #3a3431
		"--color-surface-700": "48 44 41", // #302c29
		"--color-surface-800": "38 35 32", // #262320
		"--color-surface-900": "31 28 26", // #1f1c1a
		
	}
}