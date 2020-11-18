import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Selection Sort</h1>
        <div className="content">
          <h4> Explanation:</h4>
          <p>1. Set the first element within data as min.</p>
          <p>
            2. For each item in data if the next element is smaller than min,
            min = next element
          </p>
          <p>3. After each iteration min is placed at the fron of the list.</p>
          <p>4. Repeat for each item within the list.</p>
          <p>5. Return data.</p>
          <i>
            Note: Useful for when memory write is costly as it will never exceed
            a linear complexity of swaps.
          </i>
          <h4>Time Complexity: O(n^2)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
