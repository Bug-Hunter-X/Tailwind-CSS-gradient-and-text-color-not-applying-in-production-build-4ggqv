# Tailwind CSS Production Build Issue

This repository demonstrates a bug where Tailwind CSS styles, specifically a background gradient and text color, fail to apply correctly in a production build but work as expected in development.

## Bug Description

The `bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500` and `text-gray-900` classes are defined in the code, but only work in the development environment.  In production, the background remains unchanged and the text retains its default color.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run build` to create a production build.
4. Compare the behavior of the application in development (using `npm run dev` or similar) and production.

## Solution

The solution involves ensuring correct CSS purging and build configuration, often related to how Tailwind's postcss plugin interacts with your build process.  The solution file provides a possible fix.  Consult the Tailwind CSS documentation and your bundler's documentation for further troubleshooting. 
