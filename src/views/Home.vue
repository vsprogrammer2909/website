<template>
    <section class="landing grid md-1 bg-2">
        <div class="image">
            <img src="../assets/developer.svg" alt="developer">
        </div>

        <div class="content">
            <h1>A friendly, light and <span class="text has-color-primary">simple</span> style library</h1>

            <p>Eku, is a simple css library that applies beautiful and modern style to design awesome websites and applications. It has predefined shade and assets that you can apply wherever you want.</p>

            <div class="buttons">
                <a href="/usage" class="button is-primary">Documentation</a>
                <a href="https://github.com/ekucss/eku" rel="noopener" class="button">
                    <box-icon name="github" type="logo"></box-icon>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.landing {
    height: 100%;
    grid-gap: 3rem;
    align-items: center;

    .image img {
        width: 100%;
        max-height: 15rem;
    }
}
</style>