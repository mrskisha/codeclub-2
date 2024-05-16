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

// Homework #2 Use function to return random response

// Code Club Assignment 1
var homework1 = {
	async fetch(request, env, ctx) {
		let body = {};
		let message;

		if (request.method == "POST") {
					message = "Awesome job at your POST!";
			} 
		else {
					message = "You didn't POST.";
			}

		const OUTPUT = {
			result: message,
		};
		return new Response (JSON.stringify (OUTPUT), {
					headers: {
						'content-type': 'application/json;charset=UTF-8',
					},
				});
	}
}

var homework2 = {
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

export {
	homework2 as default 
};