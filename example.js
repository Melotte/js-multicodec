'use strict'

const multicodec = require('multicodec')

const prefixedProtobuf = multicodec.addPrefix('protobuf', new TextEncoder().encode('some protobuf code'))

// eslint-disable-next-line no-console
console.log(prefixedProtobuf)
// => prefixedProtobuf 0x50...
