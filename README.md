# Sorting Algorithm Visualizer
A React-based interactive visualization tool for learning and exploring sorting algorithms. Built with React and styled using Tailwind CSS, this app provides step-by-step animations, comparisons, and metrics for 12 popular sorting algorithms.
## 🚀 Features
- 12 Sorting Algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Shell Sort
  - Cocktail Shaker Sort
  - Comb Sort
  - Gnome Sort
  - Counting Sort
  - Radix Sort (LSD)
- Controls:
  - Shuffle array
  - Start, Pause/Resume, Step-by-step execution
  - Reset array
  - Adjustable number of bars (5–200)
  - Adjustable speed
- Live Statistics:
  - Timer
  - Comparison count
  - Swap/Set count
  - Status (Idle / Running / Paused)
- Highlights:
  - Comparisons and swaps are visually highlighted
  - Sorted bars are marked distinctly
  - Supports both comparison-based and non-comparison-based algorithms (Counting & Radix Sort)
## 🖼️ Demo (How It Looks)
- Bars of varying heights represent array elements.
- Active comparisons are highlighted (yellow).
- Swaps are highlighted (red).
- Sorted elements are marked (green).
## 🛠️ Tech Stack
- React (Functional Components + Hooks)
- Tailwind CSS for styling
- Pure JavaScript implementations of sorting algorithms (no external libraries)
## 📦 Installation & Setup
1. Clone the repository:
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open in your browser:
   http://localhost:5173
## 🎮 How to Use
Choose a sorting algorithm from the dropdown.
Adjust Bars (number of elements) and Speed as needed.
Use control buttons:
Shuffle → Randomize array
Start → Begin sorting visualization
Pause → Pause visualization
Resume → Resume visualization
Step → Perform a single operation
Reset → Generate a new random array
## 📝 Notes
For Counting Sort and Radix Sort, the array values are limited to 0–99 for better visualization.
Changing the Bars slider will reset the array.
You can pause and step through the sorting process to study algorithm behavior.
## 📄 License
This project is licensed under the MIT License. You are free to use, modify, and distribute with attribution.
