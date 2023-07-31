<script>
    let width = 0;
    let height = 0;
	let frameWidth = 0;
	let numFrames = 0;
	let frames = [];

	const inlineFrames = ['https://localhost:5173/openai/', 'http://localhost:5173/claude2'];

	numFrames = inlineFrames.length;

    if (typeof window !== 'undefined') {
        width = window.innerWidth;
        height = window.innerHeight;
		frameWidth = Math.floor(width / numFrames) - 20;

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
			frameWidth = Math.floor(width / numFrames) - 20;
        });
    }

</script>

<!-- <Webview1 /> -->
{#each inlineFrames as frame, i (frame)}
	<iframe bind:this={frames[i]} id={frame} src={frame} height={height * 0.85} width={frameWidth} title={frame} />
{/each}

<textarea rows=4 cols=100 />
<button>Send</button>
