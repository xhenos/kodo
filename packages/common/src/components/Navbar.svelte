<script>
    import DarkModeButton from "./DarkModeButton.svelte";
</script>

<nav>
    <div class="left">
        <a href=".">Home</a>
        <a href=".">Download</a>
        <a href=".">Extensions</a>
        <a href=".">Docs</a>
    </div>
    <div class="right">
        <a href=".">Twitter</a>
        <a href=".">Facebook</a>
        <a href=".">Reddit</a>
        <a href=".">GitHub</a>
        <DarkModeButton />
    </div>
</nav>

<style>
    nav {
        width: calc(100% - 100px);
        height: 75px;
        background-color: var(--background-color);
        display: flex;
        filter: brightness(95%);
        padding: 0 50px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
    }

    nav a {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s;
    }

    nav a:hover {
        color: blue;
        text-decoration: underline;
    }
</style>