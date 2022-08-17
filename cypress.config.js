const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportWidth: 1920,
        viewportHeight: 1080,

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message)

                    return null
                },
                contaArquivos(nomeDaPasta) {
                    return new Promise((resolve, reject) => {
                        fs.readdir(nomeDaPasta, (err, files) => {
                            if (err) {
                                return reject(err)
                            }
                            resolve(files.length)
                        })
                    })
                },
            })
        },
    },
})
