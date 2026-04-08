# Exercise: Price Calculator — Fix the Bug

## Starting point

You are given a `PriceCalculator` component that receives three inputs: `price`, `quantity`, and `taxRate`. It should display the total calculated as:

```
total = (price × quantity) × (1 + taxRate)
```

The parent component sets `quantity` immediately, but `price` and `taxRate` are fetched from a fake API (`fake-api.ts`) and arrive at different times (800ms and 1500ms).

Run `ng serve` and navigate to `/price-calculator` to see it.

## The problem

The total displays `NaN` until all three values have arrived from the API.

## Your task

1. Find the bug in `PriceCalculator` and explain why it happens.
2. Fix it so the total is only computed and displayed once all values are available, and updates correctly whenever any input changes.

**Do not modify `fake-api.ts` or the parent component.**
