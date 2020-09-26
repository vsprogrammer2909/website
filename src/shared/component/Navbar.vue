<template>
    <header class="navbar is-sticky">
        <nav class="brand">
            <a href="/" class="logo">
                <img src="/favicon.ico" alt="">
            </a>
        </nav>

        <nav class="show-md">
            <ul>
                <li>
                    <div class="dropdown is-hoverable">
                        <a>Docs</a>

                        <ul class="in-center">
                            <li><a class="text is-capitalize" href="/docs/components">components</a></li>
                            <li><a class="text is-capitalize" href="/docs/elements">elements</a></li>
                            <li><a class="text is-capitalize" href="/docs/forms">forms</a></li>
                            <li><a class="text is-capitalize" href="/docs/helpers">helpers</a></li>
                            <li><a class="text is-capitalize" href="/docs/layout">layout</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown is-hoverable">
                        <a>Usage</a>

                        <ul class="in-center">
                            <li><a href="/usage/themes">Themes</a></li>
                            <li><a href="/usage/plugins">Plugins</a></li>
                            <hr>
                            <li><a href="/usage/examples">Examples</a></li>
                        </ul>
                    </div>
                </li>
                <hr>
                <li><a href="/download">Download</a></li>
            </ul>

            <div class="buttons">
                <a class="button is-ghost" href="https://github.com/ekucss/eku" rel="noopener">
                    <box-icon name="github" type="logo"></box-icon>
                </a>
            </div>
        </nav>

        <nav class="hide-md">
            <div class="buttons">
                <div class="button is-ghost">
                    <box-icon name="menu"></box-icon>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.search {
    width: 30vw;
    max-width: 30rem;
}
</style>