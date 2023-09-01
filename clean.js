const fs = require('fs-extra')

async function cleanBuildDirectory() {
  try {
    await fs.emptyDir('build')
    console.log('Build directory cleaned successfully.')
  } catch (error) {
    console.error('Error cleaning build directory:', error)
  }
}

cleanBuildDirectory()
