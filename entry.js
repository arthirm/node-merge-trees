'use strict';

class Entry {
  constructor(relativePath, basePath, mode, size, mtime) {
    this.mode = mode;

    this.relativePath = relativePath;
    this.basePath = basePath;
    this.size = size;
    this.mtime = mtime;

    this.linkDir = false;
  }

  isDirectory() {
    return (this.mode & 61440) === 16384;
  }
}

module.exports = Entry;
