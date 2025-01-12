# Unclear Type Error in TypeScript Function Call

This repository demonstrates a scenario where TypeScript's type inference can produce an unclear error message when there's a type mismatch in a function call.

## The Bug
The `add` function is defined to take two numbers and return their sum. However, when calling `add("1", 2)`, a type error occurs. While TypeScript will report a type error, the exact nature of the problem (string argument passed where number is expected) might not be immediately obvious from the error message.

## Solution
The solution involves improving the type checking and error handling to provide a more user-friendly error message.  This might involve more specific type guarding or using a type assertion.

## How to reproduce
1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Observe the error message in the compiler output.