/**
 * Welcome to Cloudflare Workers! This is your third  worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// src/index.js

export default {
	async fetch(request, env, ctx) {
		const kishaChoices = {
			1: "Kisha's random choice",
			2: "Kisha's second random choice",
			3: "Kisha's third random choice",
			4: "Kisha's fourth random choice"
		}

		const max = 4;
		const responseInteger = Math.ceil(Math.random() * max);

		let randomResponse = kishaChoices[responseInteger];

		return new Response(randomResponse, { status: 200 })
	},
};
