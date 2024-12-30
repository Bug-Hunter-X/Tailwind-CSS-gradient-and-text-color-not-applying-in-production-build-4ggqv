The problem was likely caused by incorrect purging of unused CSS classes during the production build process.  The solution involved adjusting the `purge` configuration in `tailwind.config.js` to explicitly include the necessary classes or using a more inclusive purging strategy.  For example:

```javascript
module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    options: {
      safelist: ['bg-gradient-to-r', 'from-blue-500', 'via-purple-500', 'to-pink-500', 'text-gray-900'],
    }
  },
  // ...rest of tailwind.config.js
}
```

Alternatively,  consider using a different purge strategy like `content: ['./src/**/*.{html,js,jsx,ts,tsx}']` or disabling purging altogether for debugging purposes. Remember to rebuild the application after making any changes to the configuration files.