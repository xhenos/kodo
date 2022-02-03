<script>
    import DarkModeButton from "./DarkModeButton.svelte";

    const landingPageUrl = isProduction ? 'https://kodo.moe/' : `http://localhost:${landingPagePort}`;
    const downloadPageUrl = isProduction ? 'https://download.kodo.moe/' : `http://localhost:${downloadPagePort}`;
    const extensionsPageUrl = isProduction ? 'https://extensions.kodo.moe/' : `http://localhost:${extensionsPagePort}`;
    const documentationPageUrl = 'https://docs.kodo.moe'
</script>

<nav>
    <div class="left">
        <a href="{landingPageUrl}">Home</a>
        <a href="{downloadPageUrl}">Download</a>
        <a href="{extensionsPageUrl}">Extensions</a>
        <a href="{documentationPageUrl}">Docs</a>
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