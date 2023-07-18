import { openai } from './api.js'

async function createCompletion() {
    try {
        const response = await openai.createCompletion({
            model: 'davinci:ft-personal-my-2023-07-17-23-03-18',
            prompt: 'What is the chemical symbol for oxygen?',
            max_tokens: 200
        })
        if (response.data) {
            console.log('choices: ', response.data.choices)
        }
    } catch (err) {
        console.log('err: ', err)
    }
}

createCompletion()