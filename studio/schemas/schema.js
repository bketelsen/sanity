// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import tag from './tag'
import technology from './technology'
import post from './post'
import page from './page'
import externalReference from './externalReference'

import global from './global'
import seo from './seo'
import author from './author'
import section from './section'
import mainImage from './mainImage'
import banner from './banner'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    page,
    author,
    category,
    section,
    technology,
    tag,
    seo,
    global,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    mainImage,
    externalReference,
    banner
  ])
})
