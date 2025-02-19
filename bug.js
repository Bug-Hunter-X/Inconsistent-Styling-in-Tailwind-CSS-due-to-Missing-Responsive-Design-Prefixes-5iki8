```javascript
// SomeComponent.js
<div className="bg-gray-100 p-4">
  <h2 className="text-xl font-bold">My Component</h2>
  <p className="mt-2 text-gray-700">Some text here.</p>
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
</div>
```
This might cause unexpected styling issues because Tailwind doesn't automatically add prefixes for responsive design. 