# Calculator Web App

A responsive, animation-rich calculator built with vanilla HTML, CSS, and JavaScript. It supports mouse and keyboard input, theme toggling, ripple feedback on every key press, and mobile-friendly sizing—perfect for showcasing modern UI polish in a beginner-friendly project.

![Calculator UI](3d-calculator.png)

## Features
- Glassmorphism-inspired design with animated gradient background.
- Dark/light theme toggle with emoji indicator.
- Grid-based keypad with ripple animation and highlighted action keys.
- Full keyboard support: numbers, operators, `Enter` for equals, `Backspace` for delete.
- Responsive layout tuned for phones down to 330 px wide.

## Tech Stack
- HTML5 for the layout (`index.html`)
- CSS3 with custom properties, keyframe animations, and responsive queries (`style.css`)
- Vanilla JavaScript for calculator logic, keyboard listeners, ripple effects, and theming (`script.js`)

## Getting Started
1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/Calculator-Web-App.git
   cd Calculator-Web-App
   ```
2. **Open the app**
   - Easiest: double-click `index.html`, or
   - Serve locally for hot reloading:
     ```bash
     npx serve .
     # or
     python -m http.server 8000
     ```
3. Visit the URL shown in your terminal (usually `http://localhost:3000` or `http://localhost:8000`).

## Usage Tips
- Tap/click the `🌙 / 🌞` button to switch between dark and light modes.
- Use keyboard shortcuts for faster input:
  - `0-9` and `.` to enter numbers,
  - `+ - * /` for operators,
  - `Enter` to calculate,
  - `Backspace` to delete the last character,
  - `C` button to clear everything.

## Project Structure
```
.
├── index.html      # Markup for the calculator shell
├── style.css       # Styling, animations, responsive tweaks
├── script.js       # Calculator logic, keyboard handling, ripple + theme toggle
└── 3d-calculator.png
```

## Roadmap Ideas
- Add scientific mode with advanced operations.
- Display calculation history or memory recall buttons.
- Replace `eval` with a custom parser for extra safety.
- Package as a PWA for offline access.

## Contributing
Issues and pull requests are welcome! Please open an issue describing the improvement or bug before sending a PR if the change is substantial.

## License
This project is released under the MIT License. See `LICENSE` (add one if you haven't yet) for details.
