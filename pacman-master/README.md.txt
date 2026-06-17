# 🕹️ Classic Pac-Man Game

A responsive, classic 2D Pac-Man arcade recreation built using native **HTML5 Canvas** and pure **Vanilla JavaScript**. This project utilizes grid-based array parsing for level design, structural bounding-box collision grids, and autonomous ghost directional logic loops.

---

## 🎯 About the Project
This project simulates the vintage mechanics of the original Pac-Man game. The game structural path is driven dynamically by parsing an abstract array layout inside the source script file, creating walls, collectible food pellets, player spawn points, and intelligent enemy paths on an optimized 2D canvas frame layer.

## 🚀 Key Features
* **HTML5 Canvas Integration:** Low-latency visuals tracking frame clearing and continuous asset rendering routines at steady 50ms interval updates.
* **Dynamic Matrix Tile Mapping:** The entire level structure is parsed out from a mutable text-based string configuration array (`tileMap`).
* **Axis-Aligned Bounding Box (AABB) Collisions:** Structured geometric collision calculations block entities from entering wall spaces and handle accurate food ingestion metrics.
* **Multi-Ghost Automation Engine:** Four unique ghost characters utilize random integer path variations that automatically recalculate valid movement steps whenever obstacles are hit.
* **State Management Cycles:** Real-time scoring variables, dynamic lifecycle counts, structural resets upon clearing levels, and a restart prompt loop.

---

## 🎮 Control Mechanics
You can direct Pac-Man using either standard keyboard navigation arrows or classic WASD development configurations:

| Action | Primary Key Input | Alternative Key Input |
| :--- | :--- | :--- |
| **Move Up** | `ArrowUp` | `W` Key |
| **Move Down** | `ArrowDown` | `S` Key |
| **Move Left** | `ArrowLeft` | `A` Key |
| **Move Right** | `ArrowRight` | `D` Key |

---

## 🗺️ Map Mapping Schema
The layout array map handles specific alphanumeric assignments within `pacman.js` to structure the environment:
* `X` — Solid Wall Block
* `P` — Pac-Man Player Start Vector
* `b` — Inky (Blue Ghost)
* `o` — Clyde (Orange Ghost)
* `p` — Pinky (Pink Ghost)
* `r` — Blinky (Red Ghost)
* ` ` (Space) — Collectible Score Pellets

---

## 💻 Project Dependency Structure
Ensure your root project directory maintains the exact architecture configuration below for correct file reference linking:

```text
├── index.html
├── pacman.css
├── pacman.js
├── wall.png
├── pacmanUp.png
├── pacmanDown.png
├── pacmanLeft.png
├── pacmanRight.png
├── blueGhost.png
├── orangeGhost.png
├── pinkGhost.png
└── redGhost.png