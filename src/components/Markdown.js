// Pass props through to lots of wrapper components.
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

// Pinned to v9 because of transpiling issues (see next.config.js for info)
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeReact from 'rehype-react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
}))

//TODO: Convert this back to the link component. Unclear why it's not working.
const MarkdownLink = ({ href, children, ...otherProps }) => {
  const cx = useStyles()
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className={cx.anchor}
      {...otherProps}
    >
      {children}
    </a>
  )
}
MarkdownLink.displayName = 'MarkdownLink'
MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
MarkdownLink.defaultProps = {}

// https://github.com/remarkjs/remark
const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)

  // https://github.com/rehypejs/rehype-sanitize#use
  .use(rehypeSanitize, defaultSchema)
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      // We make more use of smaller variants, so drop H1 and H2
      // in favor of a body variant and caption.
      // https://mui.com/components/typography/#component
      h1: (props) => <Typography {...props} variant="h3" gutterBottom />,
      h2: (props) => <Typography {...props} variant="h4" gutterBottom />,
      h3: (props) => <Typography {...props} variant="h5" gutterBottom />,
      h4: (props) => <Typography {...props} variant="h6" gutterBottom />,
      h5: (props) => <Typography {...props} variant="body1" gutterBottom />,
      h6: (props) => <Typography {...props} variant="caption" />,
      p: (props) => <Typography {...props} variant="body1" />,
      a: MarkdownLink,
    },
  })

const Markdown = ({ children }) => {
  const elems = useMemo(
    () => processor.processSync(children).result,
    [children]
  )
  return <>{elems}</>
}

Markdown.displayName = 'Markdown'

Markdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Markdown.defaultProps = {}

export default Markdown
