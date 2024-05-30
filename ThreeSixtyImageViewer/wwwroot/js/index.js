import './pannellum.js'

 export function LoadImage(selector, source) {
    pannellum.viewer(selector, {
        "type": "equirectangular",
        "panorama": source,
        "autoLoad": true
    });
}