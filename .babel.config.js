const presets = [
  {
    "presets": [
      ["env", {
        "targets": {
          "node": "current",
          "browsers": ["> 1%", "last 2 versions"]
        },
        "useBuiltIns": true
      }],
      "react"
    ],
    "plugins": [
      ["transform-runtime", {
        "polyfill": false
      }],
      "transform-class-properties",
      "transform-object-rest-spread",
      "transform-export-extensions",
      "transform-class-display-name",
      "add-module-exports"
    ]
  }
}
module.exports = { presets };