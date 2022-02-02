<script>
import DarkModeButton from "./DarkModeButton.svelte";

</script>

<div>
    <nav>
        <a href=".">Home</a>
        <a href=".">Download</a>
        <a href=".">Extensions</a>
        <a href=".">Docs</a>
        <DarkModeButton />
    </nav>
    <main>
        <slot></slot>
    </main>
	<footer>
        <p>Footer goes brrr</p>
    </footer>
</div>

<style>
:global(body) {
    --main-bg-color: white
}

:global(body.dark-mode) {
    --main-bg-color: rgb(32, 32, 32)
}

main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

:global(h1) {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}
</style>