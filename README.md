# completiontemplate-tag

A TypeScript library that leverages OpenAI's GPT-3.5 Turbo for simple and efficient chat-based text completions.

## Overview

`completion-tag` is a simple-to-use TypeScript library designed to interact with OpenAI's GPT-3.5 Turbo model. It streamlines the process of sending requests and receiving completions from the AI, making it easier for developers to integrate the model into their applications. By using a template literal tag, developers can quickly pass their text prompts to the AI and receive a response.

## Usage

Simple:

```typescript
const got = await completiontemplate`It was pizza day at ${'respond with a random name for a place'}, and ${'respond with a random name for a person'} was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.`

console.log(got)

// It was pizza day at Puffin Cove, and Rufus was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground.
```

See tests for more examples.

## Author

- [C. Large](https://github.com/chantzlarge)
