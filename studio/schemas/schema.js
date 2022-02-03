// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './arrays/blockContent'
import tag from './documents/tag'
import post from './documents/post'
import byte from './documents/byte'
import page from './documents/page'
import externalReference from './objects/externalReference'
import taxonomy from './objects/taxonomy'

import global from './documents/global'
import seo from './objects/seo'
import author from './documents/author'
import section from './documents/section'
import mainImage from './mainImage'
import banner from './objects/banner'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    byte,
    post,
    page,
    author,
    section,
    tag,
    seo,
    global,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    mainImage,
    externalReference,
    banner,
    taxonomy
  ])
})
