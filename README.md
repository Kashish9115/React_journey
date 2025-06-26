🚀 05passwordgenerator


 🛠️ Tech Stack & Core Concepts

- React Hooks:
  - `useState` for managing password settings (length, inclusion of numbers/special chars) and current output.
  - `useCallback` to memoize generator & copy functions, avoiding unnecessary re-renders.
  - `useRef` to reference the password input field for copy functionality.
- Clipboard API:
  - `window.navigator.clipboard.writeText(...)` used to copy the generated password with one click :contentReference[oaicite:1]{index=1}.
  Tailwind CSS  for styling and responsiveness — no extra CSS required.



