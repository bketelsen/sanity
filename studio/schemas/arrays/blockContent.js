/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import React from 'react';
import { BiHighlight } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: "Code", value: "code" },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: BiHighlight,
              render: props => <span style={{ backgroundColor: '#F3E841' }}>{props.children}</span>,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            icon: FiExternalLink,
            blockEditor: {
              render: props => (
                <span>
                  {props.children} <FiExternalLink />
                </span>
              ),
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],

      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: { hotspot: true }
    },
    {
      type: 'code',
      options: {
        withFilename: true,
        languageAlternatives: [
          { title: 'Text', value: 'text' },
          { title: 'HTML', value: 'html' },
          { title: 'Go', value: 'go' },
          { title: 'Rust', value: 'rust' },
          { title: 'Cue', value: 'json' },
          { title: 'XML', value: 'xml' },
          { title: 'SVG', value: 'SVG' },
          { title: 'CSS', value: 'css' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'JSON', value: 'json' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Python', value: 'python' },
          { title: 'C', value: 'clike' },
          { title: 'Shell', value: 'shell' },
        ]
      }
    },
  ]
}
