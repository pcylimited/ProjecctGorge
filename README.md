# Gorge Break 破峡 — environment demo

A storm-lit river gorge at night, built with three.js. Environment only: terrain, water,
weather, mist, trees and a cliff-top temple. No aircraft, ships or gameplay.

## Run

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:5173. `npm run build` writes a static site to `dist/`.

To open the demo from another machine on the same network, keep the dev server
running and open `http://<this-computer-LAN-IP>:5173` on that machine. Run
`ipconfig` on this computer to find the active Ethernet or Wi-Fi IPv4 address.
The server listens on all network interfaces. If Windows Firewall prompts for
Node.js network access, allow it on your trusted network.

To serve the built site, run `npm run build` followed by `npm run preview`, then
open `http://<this-computer-LAN-IP>:4173`. Preview inherits the same network binding.

If the page stays on **Starting** and the browser reports `504 Outdated Optimize Dep`,
stop the dev server, run `npm run dev -- --force` to rebuild Vite's dependency cache,
then hard-refresh the browser with Ctrl+F5.

## Controls

| Input | Action |
| --- | --- |
| Drag | Look around (switches to the free camera) |
| W A S D, Q / E | Move, down / up |
| Shift | Move fast |
| Mouse wheel | Change free-camera speed |
| C | Back to the cinematic drift along the river |
| L | Strike lightning |
| M | Mute / unmute |
| H | Hide the interface |
| F | Fly the plane / leave the plane |

### Flying (press F)

| Input | Action |
| --- | --- |
| A / D | Bank and turn (releases to wings level) |
| S / W | Nose up / nose down |
| Q / E | Rudder left / right |
| Shift | Boost |
| Space | Brake (Shift + Space while pulling = high-G turn) |
| V | Cockpit / chase view |
| X | Look back |
| Drag | Look around; the view springs back on release |

### Touch screens

On a phone or tablet a thumb stick and buttons appear on the first touch. The stick steers the plane
(left / right banks, down pulls the nose up) or moves the free camera. **FLY / EXIT** enters and leaves
the plane, **BOOST** and **BRAKE** are held, **VIEW** switches cockpit and chase, **CAM** switches
cinematic and free, and the bolt strikes lightning. Drag anywhere else to look around. Landscape works best.

The plane has no weapons; the enemy does. A searchlight beam that finds you brings every machine
gun in range down on you, and the guns keep firing for a moment after you slip out of the light.
Each hit adds 2% damage. At 100% the plane blows up: a wing tears off, and the burning fuselage
goes down trailing smoke while flaming debris arcs away. The camera pulls out to watch it hit the
river or the hillside, then you start again over the river. Flying into the rock or the river
blows the plane up where it hits: the fuselage burns there (or sinks), and the wings and tail are
thrown on ahead. Leaving the gorge puts you straight back over the river. The river runs anticlockwise from the start; near the end, before it
comes back round, it opens into an anchorage where the flagship lies, and the HUD shows the distance
to it once you are within 3 km.

The **Weather** panel sets rain, mist, wind, lightning rate and moonlight. **View** sets
exposure and quality (Low / Medium / High).

## How it is put together

Everything is generated in the browser at load time. There are no image, model or audio files.

| File | What it does |
| --- | --- |
| `src/terrain.js` | Height field for an 8 km world: a river ring, two-tier gorge walls, terraced mountains, side ravines. Bakes moon shadows and ambient occlusion, picks and levels the temple site. |
| `src/water.js` | River surface: a mesh that follows the river and is pushed up and down by real waves, with the current, foam, raindrop rings and cliff-blocked sky reflection drawn on top. `waveAt()` gives the wave height at any point, which is how boats float. |
| `src/glsl.js` | Shader code shared by all materials, including the storm sky and moon. |
| `src/post.js` | Ray-marched volumetric mist (half resolution, depth-aware upsample), lantern halo, tone mapping. |
| `src/weather.js` | Rain streaks, branching lightning bolts, wind. |
| `src/vegetation.js` | About 138,000 instanced pines and broadleaf trees. Gusts roll down the valley and bend them; some trees are limber and lean a long way, others barely move. |
| `src/temple.js` | Temple complex: walled terrace, gate, two-tier hall, pagoda, pavilion, lit windows. |
| `src/audio.js` | Rain, wind and thunder synthesised with WebAudio. |
| `src/camera.js` | Cinematic river drift and free camera. |
| `src/flightsim.js` | Port of `FFlightSim::StepFlight` from `FlightSystem/Source/FlightSystem` — Standard (simple) control scheme only, no Expert scheme, no weapons. |
| `src/flight.js` | Key input, fixed 60 Hz stepping, terrain check, and the chase camera ported from `AFlightCameraManager`. |
| `src/plane.js` | The aircraft model and its markings. |
| `src/gunfire.js` | Machine-gun tracers: rounds that fly and drop, hit the plane, spark on rock, splash in the river, with muzzle flashes and a synthesised rattle. |
| `src/explosion.js` | Explosions: fireball, smoke, embers, flaming debris and river spray drawn as soft puffs over the mist; the glow that lights the rock, water and trees; the plane breaking into pieces that tumble down and burn; and a synthesised boom. |
| `src/outposts.js` | Japanese Army positions: about 50 searchlight posts on the heights, each with a sandbagged machine gun; radar stations; 12 gunboats with a searchlight and two guns; sampans drifting on the river; and the flagship anchored where the river ends. Lights sweep the water and lock on to whatever they touch. Once a beam has the plane, every gun in range with a clear line fires. All beams are drawn; the 16 nearest the viewer also light the ground. |
| `src/structures.js` | Shared builder and material for the temple, radars and searchlights. |

The flight model keeps the plugin's algorithm and assist settings. Its handling numbers were retuned
from the plugin's placeholder jet (cruise 180 m/s) to a propeller fighter (cruise 88 m/s) so the plane
fits an 8 km gorge; they are the `MODEL` table at the top of `src/flightsim.js`. The plugin brakes on
Left Ctrl; this demo uses Space because Ctrl+W closes a browser tab.

The moon's direction is fixed because its shadows are baked into a texture when the terrain is built.
`window.__gorge` exposes the scene objects in the browser console for experiments.
