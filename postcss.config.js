module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // ...otros plugins
    ],
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        // ...otros archivos que quieras incluir en el purge
    ],
}