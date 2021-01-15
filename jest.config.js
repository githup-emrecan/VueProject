module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue',
      'ts',
      'tsx'
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.tsx?$': 'ts-jest'
    },
    snapshotSerializers: [
      'jest-serializer-vue'
    ],
    testMatch: [
        "**/components/**/scrollslider.spec.{j,t}s?(x)"
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    globals: {
      'ts-jest': {
        babelConfig: true
      }
    }
  }