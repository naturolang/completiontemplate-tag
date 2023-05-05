import { completiontemplate } from './index'

describe('completion', () => {
    test('SHOULD create completion', async () => {
        const got = await completiontemplate`It was pizza day at ${'respond with a random name for a place'}, and ${'respond with a random name for a person'} was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.`
        console.log(got)
    }, 10000)
})